import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Paper, Title, Text } from '@mantine/core';

interface Props {
  products: Product[];
}

export default function Home() {
  
  return (
    <main>
      <Paper shadow="md" p="md" withBorder>
      <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">PantallaVerde🙌Docs        </h1>
        <Text size='xl' weight={400}>
          Aquí encuentras los cursos de PantallaVerde.
        </Text>
      </Paper>
    </main>
  );
}
