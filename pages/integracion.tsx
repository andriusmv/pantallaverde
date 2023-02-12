import Link from "next/link";
import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Title, Text, Space, Image, MediaQuery, SimpleGrid, Container, Button, Center } from '@mantine/core';
import { FeaturesIntegracion } from '@/components/FeaturesIntegracion';
import { GoBack } from '@/components/goBack'
import FaqToursVirtuales from '@/components/FaqToursVirtuales';

export default function integracion() {

const problemaToursVirtuales = "Integrar modelos 3D con el vuelo de un dron es posible";
const tituloToursVirtuales = "Curso Drones con 3D";
const subtituloToursVirtuales2 = "Aprende a integrar tu modelo tridimensional con el vuelo de tu dron.";
const subtituloToursVirtuales1 = "Integra el camera tracking con Blender. Lumion opcional.";
const videoURL = "https://youtu.be/EU8vUImhGY8"
const mainImage = "/integracion/dron1.png"

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
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>
            {tituloToursVirtuales}</Title>
        <Text size={24} weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
            {subtituloToursVirtuales2}<br/>{subtituloToursVirtuales1}
          </Text></div>
          
          <div>
          <Center>
            <Image width={400} height={225} radius="lg" src={mainImage} />
          </Center>
          </div>
          <Center>
          <Link href="/pro"><Button variant="outline" color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          <Container size={1000} px={10}>
      <FeaturesIntegracion />
      
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
            <Image width={300} height={200} radius="md" src={mainImage} />
          </Center>
          </div>
          <Center>
          <Link href="/pro"><Button variant="outline" color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          
    <Container size={1000} px={10}>
      <FeaturesIntegracion />
      
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