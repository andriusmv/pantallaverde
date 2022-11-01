import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Container, Paper, Title, Text, Image, SimpleGrid, Space, Button, MediaQuery, Group, Grid, BackgroundImage, Box, Center, Stack } from '@mantine/core';
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
       smallerThan="sm" styles={{ display: 'none' }}>
      
      <SimpleGrid cols={1}><Space h="xl"/><Space h="xl"/>
      <Title order={1} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>Tutoriales cortos para <br/> emprendedores inmobiliarios 📚</Title>
<Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
          Inyecciones de tecnología para tus proyectos
        </Text>
        <Space h="xl"/>
        <Center><Image radius="lg" width={600} src="city-low-resol.png" alt="Inmobiliario"
        withPlaceholder
        placeholder={<Text align="center">Cargando imagen...</Text>}/></Center>
        <Space h="xl"/>
        <Center><Group spacing="xs">
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="default">Comenzar</Button></Link>
        <Space />
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="outline" color="teal">Hacerse Pro</Button></Link>
        </Group></Center>
        <Container size="xs" px="xs">
        <Space h="xl"/><Space h="xl"/>
      <Text size='xl' weight={400} align="-moz-initial">
Estás en la oficina ahí, entregando como puedes el último diseño,
el último plano, rezando un Padre Nuestro para que el render salga más rápido. 
Los clientes están esperando tu presentación y el estrés comienza a subir.
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">
No sabes cómo pero entregas. Tu jefe está feliz y el proyecto logró fondos para comenzar obra lo antes posible.
 Pero adivina qué? Ya tienes que seguir con el siguiente proyecto, y con el siguiente y el siguiente del siguiente...
  y así infinitamente.
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">
Y es que por más que lo intentes, siempre va a surgir algo más. Ya no se trata de velocidad, se trata de estrategia.
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">
Esas noticias que ves por ahí sobre inteligencia artificial, robots y nuevas cosas, te llaman la atención pero sabes 
que no tienes tiempo para aprender una cosa más. Si pudieras inyectártelas de una sola vez como en la 
Matrix lo harías, pero no sabes cómo... hasta hoy.
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">
        Eso es exactamente lo que hacemos aquí. Te enseñamos en tiempo récord herramientas nuevas para que las 
lleves a tu oficina y te vuelvas el mago de nuevas tecnologías inmobiliarias.
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">
Location intelligence, mapas GIS, visores 3D, realidad virtual, drones y muchas cosas más.
        </Text>
        <Space h="xl"/>     
      </Container>
      </SimpleGrid>
        </MediaQuery>

        <MediaQuery
       largerThan="sm" styles={{ display: 'none' }}>
      
      <SimpleGrid cols={1}><Space h="xl"/>
      
      <Title size={30} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>Tutoriales cortos para<br/>emprendedores<br/>inmobiliarios 📚</Title>
<Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
          Inyecciones de tecnología<br/>para tus proyectos
        </Text>
        <Center><Image radius="md" width={300} src="city-low-resol.png" alt="Inmobiliario"
        withPlaceholder
        placeholder={<Text align="center">Cargando imagen...</Text>}/></Center>
        <Center>
        <Group spacing="xs">
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="default">Comenzar</Button></Link>
        <Space />
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="outline" color="teal">Hacerse Pro</Button></Link>
        </Group></Center>
      <Space h="xl"/>


      <Container size={300} px="xs">
      <Text size='md' weight={400} align="-moz-initial">
Estás en la oficina ahí, entregando como puedes el último diseño,
el último plano, rezando un Padre Nuestro para que el render salga más rápido. 
Los clientes están esperando tu presentación y el estrés comienza a subir.
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">
No sabes cómo pero entregas. Tu jefe está feliz y el proyecto logró fondos para comenzar obra lo antes posible.
 Pero adivina qué? Ya tienes que seguir con el siguiente proyecto, y con el siguiente y el siguiente del siguiente...
  y así infinitamente.
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">
Y es que por más que lo intentes, siempre va a surgir algo más. Ya no se trata de velocidad, se trata de estrategia.
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">
Esas noticias que ves por ahí sobre inteligencia artificial, robots y nuevas cosas, te llaman la atención pero sabes 
que no tienes tiempo para aprender una cosa más. Si pudieras inyectártelas de una sola vez como en la 
Matrix lo harías, pero no sabes cómo... hasta hoy.
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">
        Eso es exactamente lo que hacemos aquí. Te enseñamos en tiempo récord herramientas nuevas para que las 
lleves a tu oficina y te vuelvas el mago de nuevas tecnologías inmobiliarias.
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">
Location intelligence, mapas GIS, visores 3D, realidad virtual, drones y muchas cosas más.
        </Text>
        <Space h="md"/>     
      </Container>
      </SimpleGrid>
        </MediaQuery>


      
      
    </main>
  );
}