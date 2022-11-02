import React from 'react';
import Link from 'next/link';
import { useMantineTheme, Text, Group, Code, Badge, Anchor, Button, Menu } from '@mantine/core';
import { Cast, PhoneCall } from 'tabler-icons-react';
import { NextLink } from '@mantine/next';

export function Logo() {
  const theme = useMantineTheme();

  return (
    <>
    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400} withArrow>
      <Menu.Target>
        <Button leftIcon={<Cast size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:20}}>PANTALLA VERDE</Button>
      </Menu.Target>

      <Menu.Dropdown>
        
        <Menu.Item component={NextLink} href="/cursos">Cursos actuales</Menu.Item>
        <Menu.Item component={NextLink} href="/servicios">Servicio consultoría</Menu.Item>
        <Menu.Item component={NextLink} color="teal" href="/soporte">Ayuda o soporte</Menu.Item>

        <Menu.Divider />
        <Menu.Item component={NextLink} href="/">Volver al inicio</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  );
}

export function LogoSmall() {
  const theme = useMantineTheme();

  return (
    <>
    <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400} withArrow>
      <Menu.Target>
        <Button leftIcon={<Cast size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:20}}>PANTALLA<br/>VERDE</Button>
      </Menu.Target>

      <Menu.Dropdown>
        
        <Menu.Item component={NextLink} href="/cursos">Cursos actuales</Menu.Item>
        <Menu.Item component={NextLink} href="/servicios">Servicio consultoría</Menu.Item>
        <Menu.Item component={NextLink} color="teal" href="/soporte">Ayuda o soporte</Menu.Item>

        <Menu.Divider />
        <Menu.Item component={NextLink} href="/">Volver al inicio</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  );
}

export default Logo;