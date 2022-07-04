import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Paper, Title, Text } from '@mantine/core';
import Avatars from '@/components/Avatars';

interface Props {
  products: Product[];
}

export default function Home() {
  
  return (
    <main>
      <Paper shadow="md" p="md" withBorder>
      <Title>Welcome to this tiny SaaS 📚</Title>
        <Text size='xl' weight={400}>
          This is gonna be a succesful site. Please consider upgrading to one of our premium memberships: Gold or Silver.
        </Text>
        <Avatars />
      </Paper>
    </main>
  );
}
