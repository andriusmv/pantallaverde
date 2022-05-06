import React from 'react';
import { useMantineTheme, Text, Group } from '@mantine/core';

export function LogoImage(props: React.ComponentPropsWithoutRef<'svg'>) {
  const theme = useMantineTheme();

  return (
    <>
        <Group>
    <Text size="xm" weight={1000}> PANTALLA VERDE</Text><Text> DOCS </Text>
     
    </Group>
    </>
  );
}