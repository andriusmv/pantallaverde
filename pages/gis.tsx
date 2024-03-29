import Link from "next/link";
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Image, MediaQuery, SimpleGrid, Container, Button, Center } from '@mantine/core';
import { FeaturesGis } from '@/components/FeaturesGis';
import FaqToursVirtuales from '@/components/FaqToursVirtuales';
import { GoBack } from "@/components/GoBack";

export default function gis() {

const problemaToursVirtuales = "Encuentra el lugar más estratégico para tu próximo proyecto";
const tituloToursVirtuales = "Curso GIS de código abierto";
const subtituloToursVirtuales1 = "Location, location, location... todo comienza por el sitio.";
const subtituloToursVirtuales2 = "Aprende a usar GIS con código abierto usando QGIS.";
const videoURL = "https://youtu.be/ultP63V1eQ4"

    return (
        <main>
        <MediaQuery
         smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={1} spacing="xl">
        <div>
        <GoBack />
        <Space h="lg" />    
        <Text italic align="center" color="teal.2">
            {problemaToursVirtuales}
            </Text>
        <Title order={1} align="center" size={80}
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>{tituloToursVirtuales}</Title>
        <Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
            {subtituloToursVirtuales2}<br/>{subtituloToursVirtuales1}
          </Text></div>
          
          <div>
          <Center>
            <Image width={400} height={225} radius="lg" src="/terrain-min.png" />
          </Center>
          </div>
          <Center>
          <Link href="/pro"><Button variant="outline" color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          <Container size={1000} px={10}>
      <FeaturesGis />
      
    </Container>  
    <Center>
        <ReactPlayer url={videoURL}/>
    </Center>
        <FaqToursVirtuales />
          </SimpleGrid>

    </MediaQuery>
    

    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        
        <SimpleGrid cols={1} spacing="xl">
        <div>
        <Space h="lg" />    
        <Text italic size="xs" align="center" color="teal.2">
            {problemaToursVirtuales}
            </Text>
        <Title order={2} align="center" size={55}
        sx={(theme) => ({ lineHeight: 1, color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>{tituloToursVirtuales}</Title>
        <Text size={12} weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
            {subtituloToursVirtuales2} {subtituloToursVirtuales1}
          </Text></div>
          
          <div>
          <Center>
            <Image width={300} height={200} radius="md" src="/unit-min.png" />
          </Center>
          </div>
          <Center>
          <Link href="/pro"><Button variant="outline" color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          
    <Container size={1000} px={10}>
      <FeaturesGis />
      
    </Container>  
    <Center>
        <ReactPlayer width={288} height={162} url={videoURL}/>
    </Center>
        <FaqToursVirtuales />
          </SimpleGrid>

    </MediaQuery>
  
  
        
        
      </main>
    );
  }