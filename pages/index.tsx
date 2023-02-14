import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import { Container, Paper, Title, Text, SimpleGrid, Space, Button, MediaQuery, Group, Grid, Loader, Box, Center, Stack, Card, Badge, Tabs } from '@mantine/core';
import Avatars from '@/components/Avatars';
import { CardsServices } from 'components/CardsServices';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGrid, List } from 'tabler-icons-react';
import Logo from '@/components/icons/Logo';
import { ListServices } from '@/components/ListServices';

interface Props {
  products: Product[];
}

const parrafo1 = "Estás en la oficina ahí, entregando como puedes el último diseño, el último plano, rezando un Padre Nuestro para que el render salga más rápido. Los clientes están esperando tu presentación y el estrés comienza a subir."
const parrafo2 = "No sabes cómo pero entregas. Tu jefe está feliz y el proyecto logró fondos para comenzar obra lo antes posible. Pero adivina qué? Ya tienes que seguir con el siguiente proyecto, y con el siguiente y el siguiente del siguiente... y así infinitamente."
const parrafo3 = "Y es que por más que lo intentes, siempre va a surgir algo más. Ya no se trata de velocidad, se trata de estrategia."
const parrafo4 = "Esas noticias que ves por ahí sobre inteligencia artificial, robots y cosas nuevas, te llaman la atención pero sabes que no tienes tiempo para aprender una cosa más. Si pudieras inyectártelas de una sola vez como en la Matrix lo harías, pero no sabes cómo... hasta hoy."
const parrafo5 = "Eso es lo que hacemos aquí. Te enseñamos en tiempo récord herramientas nuevas para que las lleves a tu oficina y te vuelvas el mago de nuevas tecnologías inmobiliarias."
const parrafo6 = "Location intelligence, mapas GIS, visores 3D, realidad virtual, drones y muchas cosas más."

export default function Home() {
  return (
    <main>
      <MediaQuery
       smallerThan="sm" styles={{ display: 'none' }}>
      
      <SimpleGrid cols={1}><Space h="xl"/><Space h="xl"/>
      <Title order={1} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>Tutoriales cortos para<br/>emprendedores<br />inmobiliarios 📚</Title>
<Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
          Inyecciones de tecnología para tus proyectos
        </Text>
        <Space h="xl"/>
        <Center><Box       sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        textAlign: 'center',
        borderRadius: theme.radius.md
      })}><Image width={400} height={225} src="/city-low-resol.png" placeholder='blur' blurDataURL="/city-low-resol.png" /></Box></Center>
        <Space h="xl"/>
        <Center><Group spacing="xs">
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="default">Comenzar</Button></Link>
        <Space />
        <Link href={'/pro'}><Button size="xl" compact variant="outline" color="teal">Hacerse Pro</Button></Link>
        </Group></Center>
        <Container size="xs" px="xs">
        <Space h="xl"/><Space h="xl"/>
      <Text size='xl' weight={400} align="-moz-initial">{parrafo1}
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">{parrafo2}
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">{parrafo3}
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">{parrafo4}
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">{parrafo5}
        </Text>
        <Space h="xl"/>
        <Text size='xl' weight={400} align="-moz-initial">{parrafo6}
        </Text>
        <Space h="lg"/><Space h="lg"/>    

        <Tabs color="gray" variant="pills" radius="md" defaultValue="gallery">
      <Tabs.List grow>
        <Tabs.Tab value="gallery" icon={<LayoutGrid size={14} />}>Galería</Tabs.Tab>
        <Tabs.Tab value="list" icon={<List size={14} />}>Lista</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
      <CardsServices />
      </Tabs.Panel>

      <Tabs.Panel value="list" pt="xs">
        <ListServices />
        </Tabs.Panel>
    </Tabs>

      </Container>

      </SimpleGrid>
        </MediaQuery>

        <MediaQuery
       largerThan="sm" styles={{ display: 'none' }}>
      
      <SimpleGrid cols={1}><Space h="xl"/>
      
      <Title size={30} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>Tutoriales cortos<br/>para emprendedores<br/>inmobiliarios 📚</Title>
<Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
          Inyecciones de tecnología<br/>para tus proyectos
        </Text>
        <Center><Container><Image src="/city-low-resol.png" width={400} height={225} /></Container></Center>
        <Center>
        <Group spacing="xs">
        <Link href={'/signin#pleasesignin'}><Button size="xl" compact variant="default">Comenzar</Button></Link>
        <Space />
        <Link href={'/pro'}><Button size="xl" compact variant="outline" color="teal">Hacerse Pro</Button></Link>
        </Group></Center>
      <Space h="xl"/>


      <Container size={300} px="xs">
      <Text size='md' weight={400} align="-moz-initial">{parrafo1}
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">{parrafo2}
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">{parrafo3}
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">{parrafo4}
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">{parrafo5}
        </Text>
        <Space h="md"/>
        <Text size='md' weight={400} align="-moz-initial">{parrafo6}
        </Text>

        <Space h="lg"/>
        
        <Tabs color="gray" variant="pills" radius="md" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" icon={<LayoutGrid size={14} />}>Galería</Tabs.Tab>
        <Tabs.Tab value="list" icon={<List size={14} />}>Lista</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
      <CardsServices />
      </Tabs.Panel>

      <Tabs.Panel value="list" pt="xs">
        <ListServices />
        </Tabs.Panel>

    </Tabs>
          </Container>
      </SimpleGrid>
        </MediaQuery>


      
      
    </main>
  );
}