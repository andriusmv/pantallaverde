import Link from "next/link";
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Image, MediaQuery, SimpleGrid, Container, Button, Center } from '@mantine/core';
import { FeaturesBlender } from '@/components/FeaturesBlender';
import FaqToursVirtuales from '@/components/FaqToursVirtuales';
import { GoBack } from "@/components/GoBack";

export default function gis() {

const problemaToursVirtuales = "El software que te hará libre";
const tituloToursVirtuales = "Curso Blender desde cero";
const subtituloToursVirtuales1 = "Desde modelar en 3D hasta publicar en la web.";
const subtituloToursVirtuales2 = "Aprende a usar software más increíble jamás inventado.";
const videoURL = "https://youtu.be/h4bBsGpKKnc"

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
            <Image width={400} height={225} radius="lg" src="/Suzzane.png" />
          </Center>
          </div>
          <Center>
          <Link href="/pro"><Button variant="outline" color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          <Container size={1000} px={10}>
      <FeaturesBlender />
      
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
        <Text size="xl" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
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
      <FeaturesBlender />
      
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