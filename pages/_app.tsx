import React from 'react';
import { AppShell, MantineProvider, Header, MediaQuery, useMantineTheme, Group, ColorScheme, ColorSchemeProvider, SimpleGrid, Grid, Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import type { Database } from 'types_db';
import { Logo, LogoSmall } from '@/components/icons/Logo';
import Link from 'next/link';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import ProMode from '@/components/ProMode';
import Configuration from '@/components/Configuration';

export default function App(props: AppProps) {
  const [supabaseClient] = useState(() =>
  createBrowserSupabaseClient<Database>()
);
useEffect(() => {
  document.body.classList?.remove('loading');
}, []);
  const { Component, pageProps } = props;
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  

  return (
    
      
      <SessionContextProvider supabaseClient={supabaseClient}>
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
            padding="sm"
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            /*      navbar={<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

                          <Listado />

            </Navbar>} */
            
                  /* footer={
                    <Footer height={60} p="md">
                      <Grid justify="space-between" align="center" >
                      <Grid.Col span={2}><Text>Creado por <Link href="https://github.com/andriusmv" passHref><Anchor component="a">Andrés Moreno Vásquez</Anchor></Link></Text></Grid.Col>
                      <Grid.Col span={2}><Group><Center><Configuration /></Center></Group></Grid.Col>
                  </Grid>
                    </Footer> 
                  } */
            header={
            
              <Header height={75} p="xl" sx={{ borderBottom: 0 }} >
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    
                    <SimpleGrid cols={3}>
                      <Configuration />  
                      <Group><Center><LogoSmall /></Center></Group>
                      
                  </SimpleGrid>
                    </MediaQuery>

                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                  
                    <Grid justify="space-around" align="center" >
                      <Grid.Col span={2}><Link href="/"><Logo /></Link></Grid.Col>
                      <Grid.Col span={2}><Group><Center><ProMode /><Configuration /></Center></Group></Grid.Col>
                  </Grid>
                  </MediaQuery>
                </Header>}
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.white },
            })}
          >
            <Component {...pageProps} />
            <Analytics />
        </AppShell>
            </MantineProvider>
            </ColorSchemeProvider>
        </MyUserContextProvider>
        </SessionContextProvider>
            
  );
}
