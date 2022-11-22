import React from 'react';
import Link from 'next/link';
import { useMantineTheme, Text, Group, Code, Badge, Anchor, Button, Menu } from '@mantine/core';
import { Cast, PhoneCall } from 'tabler-icons-react';
import { NextLink } from '@mantine/next';

export function Logo() {
  const theme = useMantineTheme();

  return (
    <>
      <Button leftIcon={<Cast size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:20}}>PANTALLA VERDE</Button>
      
    </>
  );
}

export function LogoSmall() {
  const theme = useMantineTheme();

  return (
    <>
    
        <Button leftIcon={<Cast size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:15}}>PANTALLA<br/>VERDE</Button>
   
    </>
  );
}

export default Logo;