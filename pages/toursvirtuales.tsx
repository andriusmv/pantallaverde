import Link from "next/link";
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal, useState } from 'react';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Image, MediaQuery, SimpleGrid, Container, Button, Center, Group, Grid, Col } from '@mantine/core';
import { ClipboardText } from 'tabler-icons-react';
import { FeaturesToursVirtuales } from '@/components/FeaturesToursVirtuales';


export default function toursvirtuales() {

const problemaToursVirtuales = "> ¿Quieres aprender a crear tus propios recorridos virtuales? <";
const tituloToursVirtuales = "Curso Tours Virtuales";
const subtituloToursVirtuales1 = "Desde cuál cámara comprar hasta tu primer recorrido 360° en la web.";
const subtituloToursVirtuales2 = "Todo lo que necesitas para vender tu servicio de recorridos interactivos.";

    return (
        <main>
        <MediaQuery
         smallerThan="sm" styles={{ display: 'none' }}>
        <SimpleGrid cols={1} spacing="xl">
        <div>
        <Space h="lg" />    
        <Text italic align="center" sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.colors.gray[3] : theme.black })}>
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
          <Link href="/pro"><Button color="teal" size="xl">Comenzar</Button></Link>
          </Center>
          <Space h="lg" />
          
          </SimpleGrid>

    </MediaQuery>
          
    <Container size={1000} px={10}>
      <FeaturesToursVirtuales />
      
    </Container>  
    <Center>
        <ReactPlayer url="https://youtu.be/d6hWcz0UH8c"/>
    </Center>
  
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        
        <SimpleGrid cols={1}><Space h="xl"/>
        
        
        </SimpleGrid>
          </MediaQuery>
  
  
        
        
      </main>
    );
  }