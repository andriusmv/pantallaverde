import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Alert, Center, Container, SimpleGrid, Space } from '@mantine/core';
import { GoBack } from '@/components/GoBack';
import { AlertCircle } from 'tabler-icons-react';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
  return (
  <div>
    <GoBack />
    
        <Space h="lg" />
            <Container size={500}>
    <Alert icon={<AlertCircle size="1rem" />} title="Alerta" color="red">
      Los cursos están en modo beta (prueba).
      Puedes inscribirte en este modo experimental para aprovechar un precio más bajo, o esperar a que estén publicados al 100% en Marzo 25.
      Gracias por tu paciencia.
    </Alert>
    </Container>  
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