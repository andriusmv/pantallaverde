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
        <Paper withBorder>
        <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
        <Link href={'/'}><Button variant="default">👋 Bienvenidos</Button></Link>
        <Link href={'/signin#pleasesignin'}><Button variant="default">🚀 Iniciar/Registro</Button></Link>
        <Link href={'/free'}><Button variant="light">🤟 Cursos GRATUITOS</Button></Link>
        <Link href={'/pro'}><Button variant="default">⭐ Volverse PRO</Button></Link>
        <Link href={'/gold'}><Button variant="light">🥇 Curso Tours Virtuales</Button></Link>
        <Link href={'/silver'}><Button variant="light">🥈 Curso Drones con 3D</Button></Link>
        <Link href={'/account'}><Button variant="default">👨‍🚀 Mi cuenta</Button></Link>
        <Link href={'/api/auth/logout'}><Button variant="default">🚪 Salir</Button></Link>
    </Stack>

    
    </Paper>

      </SimpleGrid></ScrollArea>
      </>
)}