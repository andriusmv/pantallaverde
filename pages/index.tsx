import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Container, Paper, Title, Text, Image, SimpleGrid, Space, Button, MediaQuery, Group, Grid } from '@mantine/core';
import Avatars from '@/components/Avatars';
import SpanishSpeaking from 'components/SpanishSpeaking';
import Link from 'next/link';

interface Props {
  products: Product[];
}

export default function Home() {
  
  return (
    <main>
      <MediaQuery
       smallerThan="xs" styles={{ fontSize: 'xs' }}>
      <Container>
      <Title order={1} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>Tutoriales cortos en video para</Title>
      <Title order={1} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>emprendedores inmobiliarios 📚</Title>
        <Text size="xl" weight={600} align="center" color="teal">
          Inyecciones de tecnología para proyectos inmobiliarios
        </Text>
      </Container>
        </MediaQuery>
      <Space h="xl"/>
      <Container>
      <SimpleGrid
      cols={2}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      <div><Image radius="md" src="city-low-resol.png" /></div>
      <div><Text size='xl' weight={400}>
          Esta es una plataforma educativa para aprender sobre tecnologías nuevas aplicadas al sector inmobiliario.
          Se enfoca en algunas tecnologías específicas de visualización como recorridos virtuales, drones y modelación 3D
          para proyectos inmobiliarios nuevos (y existentes).
          <Space h="xl"/>
          El sector inmobiliario es enorme. Con la ayuda de nuevas tecnologías se aumenta la probabilidad de éxito en el proyecto que estés trabajando o que planees emprender.
        </Text>
        <Space h="xl"/>
        <Group spacing="xs">
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="default">Comenzar</Button></Link>
        <Space />
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="outline" color="teal">Hacerse Pro</Button></Link>
        </Group>
        </div>


    </SimpleGrid>
      </Container>
      <Space h="xl"/>
      
    </main>
  );
}