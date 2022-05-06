import 'styles/main.css';
import 'styles/chrome-bug.css';
import { useEffect } from 'react';
import React from 'react';
import { AppShell, MantineProvider, Navbar, Footer, Header, MediaQuery, Burger, useMantineTheme, Text, Group, Button } from '@mantine/core';
import { useContext, useState } from 'react';


import Layout from 'components/Layout';
import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import { Logo } from '@/components/icons/Logo';
import Link from 'next/link';
import Listado from '@/components/Listado';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <div>
      
      <UserProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider supabaseClient={supabaseClient}>
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'dark',

          colors: {
            // Add your color
            'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            // or replace default theme color
            blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* ... */],
            
          },
  
          shadows: {
            // other shadows (xs, sm, lg) will be merged from default theme
            md: '1px 1px 3px rgba(0,0,0,.25)',
            xl: '5px 5px 3px rgba(0,0,0,.25)',
          },
  
          headings: {
            fontFamily: ', sans-serif',
            sizes: {
              h1: { fontSize: 50 },
            },
          },
        }}>
          <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

              <Listado />

</Navbar>}

      footer={
        <Footer height={60} p="md">
          <Text>Creado con ❤️ por Andrés Moreno Vásquez</Text>
        </Footer>
      }
      header={<Header height={70} p="xl">
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
 </MediaQuery>
 <Group position="apart">
 <Link href="/"><Logo /></Link>
 <Link href="/pro"><Button>PantallaVerde⭐PRO</Button></Link>
</Group>

      </Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
            <Component {...pageProps} />
      </AppShell>
            </MantineProvider>
        </MyUserContextProvider>
      </UserProvider>
    </div>
  );
}
