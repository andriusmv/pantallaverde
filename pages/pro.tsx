import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Center, SimpleGrid, Space } from '@mantine/core';
import { GoBack } from '@/components/GoBack';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return (
  <div>
    <GoBack />
    
        <Space h="lg" />  
    <Pricing products={products} />
    
    </div>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const products = await getActiveProductsWithPrices();

  return {
    props: {
      products
    },
    revalidate: 60
  };
}