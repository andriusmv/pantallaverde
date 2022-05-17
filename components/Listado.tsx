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
        <Link href={'/'}><Button variant="default">👋 Welcome</Button></Link>
        <Link href={'/signin#pleasesignin'}><Button variant="default">🚀 Sign-in/Sign-up</Button></Link>
        <Link href={'/pro'}><Button variant="default">⭐ Upgrade Membership</Button></Link>
        <Link href={'/free'}><Button variant="light">🤟 FREE content</Button></Link>
        <Link href={'/gold'}><Button variant="light">🥇 GOLD members only</Button></Link>
        <Link href={'/silver'}><Button variant="light">🥈 SILVER members only</Button></Link>
        <Link href={'/account'}><Button variant="default">👨‍🚀 My account</Button></Link>
        <Link href={'/signout'}><Button variant="default">🚪 Logout</Button></Link>
    </Stack>

    
    </Paper>

      </SimpleGrid></ScrollArea>
      </>
)}