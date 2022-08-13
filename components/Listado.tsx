import React, {  useState } from 'react';
import { SimpleGrid, Paper, ScrollArea, Stack } from '@mantine/core';
import Link from 'next/link';
import { Button, Space } from '@mantine/core';


export default function Listado() {

  const [opened, setOpen] = useState(false);

  return (
    <>
      <Space h="xl" />
      <ScrollArea>
      <SimpleGrid cols={1} spacing="md">
        <Paper>
        <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white, height: 300 })}>
        <Link href={'/'}><Button variant="default" color="teal">👋 Bienvenidos</Button></Link>
        <Link href={'/signin#pleasesignin'}><Button variant="default">🚀 Iniciar/Registro</Button></Link>
        <Link href={'/pro'}><Button variant="default" color="teal">⭐ Hacerse Pro</Button></Link>
        <Link href={'/free'}><Button variant="default" color="teal">🤟 Cursos gratuitos</Button></Link>
        <Link href={'/gold'}><Button variant="default" color="teal">🥇 Curso Tours Virtuales</Button></Link>
        <Link href={'/silver'}><Button variant="default" color="teal">🥈 Curso Drones con 3D</Button></Link>
        <Link href={'/account'}><Button variant="default" color="teal">👨‍🚀 Mi cuenta</Button></Link>
        <Link href={'/api/auth/logout'}><Button variant="default" color="teal">🚪 Salir</Button></Link>
    </Stack>

    
    </Paper>

      </SimpleGrid></ScrollArea>
      </>
)}