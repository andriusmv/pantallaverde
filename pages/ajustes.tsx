import React from 'react'
import { Title, Text, Space, SimpleGrid, Center, Group } from '@mantine/core';
import { GoBack } from "@/components/GoBack";
import LightAndDarkModeButton from '@/components/LightDarkButton';
import { ArrowsLeftRight, Search, Settings, Trash, User, Menu2 } from 'tabler-icons-react';

export default function Ajustes() {

    return (
        <main>
        <SimpleGrid cols={1} spacing="xl">
        <div>
        <GoBack />
        <Space h="lg" />
        <Title order={1} align="center" size={40}
        sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>
            Personaliza tu experiencia
        </Title>
        <Text size={24} weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
            Ajustes</Text>
            <Space h="lg" />    
        <Center><Group><Text size="lg">Modo oscuro/claro</Text><LightAndDarkModeButton /></Group></Center>
        </div>
          

          </SimpleGrid>
  
  
        
        
      </main>
    );
  }