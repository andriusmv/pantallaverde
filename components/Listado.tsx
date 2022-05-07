import React, { Component, useState } from 'react';
import { createStyles, Collapse, Group, Code, Text, Aside, List, Divider, ThemeIcon, SimpleGrid, Accordion, Anchor, Paper, ScrollArea } from '@mantine/core';
import {
  BellRinging,
  Drone,
  Fingerprint,
  ThreeDCubeSphere,
  Key,
  Settings,
  TwoFA,
  DatabaseImport,
  Receipt2,
  SwitchHorizontal,
  Logout,
  CircleCheck,
  CircleDashed,
  Palette,
} from 'tabler-icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Button, Space } from '@mantine/core';


export default function Listado() {

  const [opened, setOpen] = useState(false);

  return (
    <>
      <Space h="xl" />
      <ScrollArea>
      <SimpleGrid cols={1} spacing="md">
      <Link href={'/'}><Accordion>
        <Accordion.Item label="👋 Bienvenidos">
        </Accordion.Item>
      </Accordion></Link>
      <Link href={'/signin'}><Accordion>
        <Accordion.Item label="🚀 Ingreso/Registro">
        </Accordion.Item>
      </Accordion></Link>
        <Paper withBorder>
      <Accordion>
      <Accordion.Item icon={
        <ThemeIcon color="green" variant="light">
            <Drone size={14} />
          </ThemeIcon>} label="Curso Integración Drones">
      <Text><Anchor variant="text" size="md" href={'/integracion#instrucciones'}>📝 Instrucciones</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#elefectochromakey'}>🔮 El Efecto Chroma Key</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#cameratracking'}>🎯 Camera Tracking</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#basicosdeldron'}>🚁 Básicos del Dron</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#preparaciondel3d'}>🧊 Preparación del 3D</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#eleditordevideo'}>🎞️ El Editor de Video</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#integrarpersonasreales'}>🧑‍🤝‍🧑 Integrar Personas Reales</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#fotogrametriabasica'}>⛰️ Fotogrametría Básica</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/integracion#apuntesfinales'}>🧾 Apuntes Finales</Anchor></Text>
      </Accordion.Item>
      <Accordion.Item icon={
        <ThemeIcon color="blue" variant="light">
            <ThreeDCubeSphere size={14} />
          </ThemeIcon> } label="Curso Tours Virtuales">
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#instrucciones'}>📝 Instrucciones</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#elformato360'}>💡 El formato 360°</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#prepararelsitio'}>🧹 Preparar el sitio</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#realizarlastomas'}>👀 Realizar las tomas</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#procesamientoyedicion'}>💻 Procesamiento y edición</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#entornohdri'}>🌎 Entorno HDRI</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#subiragooglemaps'}>🗺️ Subir a Google Maps</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#proveedoresdetours'}>🔗 Proveedores de Tours</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#apuntesfinales'}>🧾 Apuntes Finales</Anchor></Text>
      </Accordion.Item>
    </Accordion>
    </Paper>
            <Link href='/account'><Button compact size="md" fullWidth variant="filled">👨‍🚀 Mi perfil</Button></Link>
            <Button compact size="md" fullWidth variant="filled">🚪 Salir</Button>
      </SimpleGrid></ScrollArea>
      </>
)}