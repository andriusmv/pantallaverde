import Link from "next/link";
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Image, MediaQuery, SimpleGrid, Container, Button, Center } from '@mantine/core';
import { FeaturesToursVirtuales } from '@/components/FeaturesToursVirtuales';
import FaqToursVirtuales from '@/components/FaqToursVirtuales';
import { GoBack } from "@/components/GoBack";

export default function toursvirtuales() {

const problemaToursVirtuales = "¿Quieres crear tus propios recorridos virtuales?";
const tituloToursVirtuales = "Curso Tours Virtuales";
const subtituloToursVirtuales1 = "Desde cuál cámara comprar hasta tu primer recorrido 360° en la web.";
const subtituloToursVirtuales2 = "Todo lo que necesitas para vender tu servicio de recorridos interactivos.";
const videoURL = "https://youtu.be/d6hWcz0UH8c"

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
        <Text size={24} weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
            {subtituloToursVirtuales2}<br/>{subtituloToursVirtuales1}
          </Text></div>
          
          <div>
          <Center>
            <Image width={400} height={225} radius="lg" src="/unit-min.png" />
          </Center>
          </div>
          <Center>
          <Link href="/pro"><Button variant="outline" color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          <Container size={1000} px={10}>
      <FeaturesToursVirtuales />
      
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
      <FeaturesToursVirtuales />
      
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