import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Center, Group, NumberInput, Paper, Select, Space, Title, Text, Button, SimpleGrid, SegmentedControl } from '@mantine/core';
import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';
import { GoBack } from './GoBack';

interface Props {
  products: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month' | 'one_time';

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
      <section>
        <div>
          <div>Error</div>
          <p>
            No subscription pricing plans found. Create them in your{' '}
            <Link href="https://dashboard.stripe.com/products">
              Stripe Dashboard
            </Link>
            .
          </p>
        </div>
      </section>
    );

  return (
    <>
      
      <Space h="lg" />  
      <SimpleGrid cols={1} spacing="xl"> 
    <Paper p="xl">
      <Title order={1} align="center" size={40}
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>
        Una inyección de tecnología,</Title>
      <Title order={1} align="center" size={40}
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>
        infinitas posibilidades</Title>
      <Space h="xl" />
      <Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
        El mundo se mueve rápido. Nosotros también.
      </Text>
      <Space h="xl" />



      <Space h="xs" />
      <div>
        <Center>
          <Button.Group>
            <Button
            variant="default"
              onClick={() => setBillingInterval('month')}
              type="button"
              className={`${billingInterval === 'month'
                  ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'} rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Mensualidad
            </Button>
            <Button
            variant="default"
              onClick={() => setBillingInterval('year')}
              type="button"
              className={`${billingInterval === 'year'
                  ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'} rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Anualidad
            </Button>
            <Button
              variant="default"
              onClick={() => setBillingInterval('one_time')}
              type="button"
              className={`${billingInterval === 'one_time'
                  ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
                  : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'} rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
            >
              Un sólo pago
            </Button>
            </Button.Group>
            </Center>
            </div>

      <Space h="lg" />
        
        <Center>
      <Group>
        <div>
          {products.map((product) => {
            const price = product?.prices?.find(
              (price) => price.interval === billingInterval
              );
              if (!price)
              return null;
              const priceString = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: price.currency,
                minimumFractionDigits: 0
              }).format((price?.unit_amount || 0) / 100);
              return (
              <div
              key={product.id}
              
              >
                <SimpleGrid cols={1}>
                  <Title order={1} align="center"
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>
                    {product.name}
                  </Title>
                  <Text size="xl" weight={600} align="center" color="light">{product.description}</Text>
                  <Title order={2} align="center"
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>
                    
                      {priceString}
                    
                    <Text size="xl">
                      /{billingInterval}
                    </Text>
                  </Title>
                  <Button
                    size="lg"
                    variant="filled"
                    color="teal"
                    type="button"
                    disabled={isLoading}
                    loading={priceIdLoading === price.id}
                    onClick={() => handleCheckout(price)}
                    className="mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                  >
                    {product.name === subscription?.prices?.products?.name
                      ? 'Administrar'
                      : 'Inscribirme'}
                  </Button>
                </SimpleGrid><Space h="lg" />
              </div>
            );
          })}

        </div>
        
      </Group>
      </Center>

      {/* <Center>
        
        <Select
          label="Moneda"
          size="xs"
          placeholder="Moneda"
          data={[
            { value: 'euro', label: 'EUR euro €' },
            { value: 'dólar', label: 'USD dólar $' }
          ]}
          defaultValue='euro' /><Space w="xs" />
          <NumberInput
            defaultValue={1}
            placeholder="usuarios"
            label="Usuarios"
            required
            size="xs"
             />
             </Center>
      <Space h="xl" /> */}
      <Text color="red" align='center'>Procesamiento de pagos a través de Stripe.</Text>
    </Paper>
    </SimpleGrid>
    </>

  );
}
