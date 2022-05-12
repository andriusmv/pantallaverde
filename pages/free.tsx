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



  return (
    <>
      <SimpleGrid cols={1} spacing="xl">
        <Paper withBorder p="xl">
          <Title>FREE content 🎉</Title>
          <Space h="xl" />
          <Text size="xl">This content is free and available for everyone on the internet.</Text>
          <Space h="xl" />
          
        </Paper>
        <Paper withBorder p="xl">

          <Text size="xl">Free content:</Text>
          <Text size="xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 🍪🍪🍪."

</Text>

          </Paper>

          </SimpleGrid>

          <Group spacing="xl">
           

        </Group>
      </>);
}