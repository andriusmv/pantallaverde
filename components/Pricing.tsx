import cn from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from 'components/ui/Button';
import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';
import { SimpleGrid, Paper, Text, Title, Group, Space } from '@mantine/core';
import Link from 'next/link';

interface Props {
  products: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month';

export default function Pricing({ products }: Props) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };

  if (!products.length)
    return (
      <>
      <Space />
      <SimpleGrid cols={1} spacing="md">
        <Paper withBorder>
          <Text>No subscription pricing plans found. Create them in your{' '}
<Link href={'https://dashboard.stripe.com/products'}>Stripe Dashboard</Link></Text>
        </Paper>
      </SimpleGrid>
      </>);

  return (
    <>
      <SimpleGrid cols={2}>
        <Paper withBorder p="xl">
          <Title>Upgrade Your Membership ⭐</Title>
          <Space h="xl" />
          <Text size="xl">Choose a premium membership! They are awesome!</Text>     
        </Paper>

          <Space h="xl" />
          <Text size="xl">Available memberships:</Text>
          <Space h="xl" />
          </SimpleGrid>

          <Group>
           
        <div>
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
            );
            if (!price) return null;
            const priceString = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: price.currency,
              minimumFractionDigits: 0
            }).format((price?.unit_amount || 0) / 100);
            return (
              <Paper withBorder p="xl">
              <div>
                <div>
                  <Title order={2}>
                    {product.name}
                  </Title>
                  <Text>{product.description}</Text>
                  <Text>
                      {priceString}
                      <Text>
                      /{billingInterval}
                  </Text>
                  </Text>
                  <Button
                    variant="slim"
                    type="button"
                    disabled={isLoading}
                    loading={priceIdLoading === price.id}
                    onClick={() => handleCheckout(price)}
                    className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                  >
                    {product.name === subscription?.prices?.products?.name
                      ? 'Manage'
                      : 'Subscribe'}
                  </Button>
              </div>
                </div></Paper>
            );
          })}
        </div>
        </Group>
      </>);
}
