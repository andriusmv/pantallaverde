import { useEffect } from 'react';
import React from 'react';
import { AppShell, MantineProvider, Navbar, Footer, Header, MediaQuery, Burger, useMantineTheme, Text, Group, Button, ColorScheme, ColorSchemeProvider, SimpleGrid, Grid, Anchor } from '@mantine/core';
import { useContext, useState } from 'react';

import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import { Logo } from '@/components/icons/Logo';
import Link from 'next/link';
import Listado from '@/components/Listado';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import LightAndDarkModeButton from '@/components/LightDarkButton';
import ProMode from '@/components/ProMode';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div>
      
      <UserProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider supabaseClient={supabaseClient}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
                // Theme is deeply merged with default theme
                colorScheme,
                
        
                shadows: {
                  // other shadows (xs, sm, lg) will be merged from default theme
                  md: '1px 1px 3px rgba(0,0,0,.25)',
                  xl: '5px 5px 3px rgba(0,0,0,.25)',
                },
        
                headings: {
                  fontFamily: 'DIN 1451',
                  fontWeight: 700,
                  sizes: {
                    h1: { fontSize: 50 }
                  }}
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
          <Text>Created with ❤️ by <Anchor href="https://github.com/andriusmv">Andrés Moreno Vásquez</Anchor></Text>
        </Footer>
      }
      header={<div><Header height={100} p="xl">
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="xl"
                color={theme.colors.gray[6]}
                mr="xl"
              />
 </MediaQuery>
 <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>

 <Grid justify="space-around" align="center">
  <Grid.Col span={4} style={{ minHeight: 70 }}><Link href="/"><Logo /></Link></Grid.Col>
  <Grid.Col span={3} style={{ minHeight: 70 }}><LightAndDarkModeButton /></Grid.Col>
  <Grid.Col span={2} style={{ minHeight: 70 }}><ProMode />
</Grid.Col>
 </Grid>
 </MediaQuery>

      </Header></div>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
            <Component {...pageProps} />
      </AppShell>
            </MantineProvider>
            </ColorSchemeProvider>
        </MyUserContextProvider>
      </UserProvider>
    </div>
  );
}
