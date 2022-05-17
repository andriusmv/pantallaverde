import React from 'react';
import Link from 'next/link';
import { useMantineTheme, Text, Group, Code } from '@mantine/core';

export function Logo() {
  const theme = useMantineTheme();

  return (
    <>
    <Link href="/">
<Group>
    <Text weight={1000}>PANTALLA VERDE</Text><Code>DOCS</Code>
    </Group></Link>
    </>
  );
}

export default Logo;