import React from 'react';
import Link from 'next/link';
import { useMantineTheme, Text, Group, Code, Badge, Anchor, Button } from '@mantine/core';
import { DeviceLaptop } from 'tabler-icons-react';

export function Logo() {
  const theme = useMantineTheme();

  return (
    <>
    
    <Group>
    <Anchor href="/" style={{ textDecoration: 'none'}}>
    <Button leftIcon={<DeviceLaptop size={25} strokeWidth={3} />} variant="subtle" color="dark" style={{ fontSize:20}}>PANTALLA VERDE</Button>
    </Anchor>
    </Group>
    </>
  );
}

export default Logo;