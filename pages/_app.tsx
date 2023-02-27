import { useEffect, useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { AppShell, MantineProvider, createEmotionCache, Header, MediaQuery, Group, ColorScheme, ColorSchemeProvider, Text, SimpleGrid, Grid, Center } from '@mantine/core';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { MyUserContextProvider } from 'utils/useUser';
import type { Database } from 'types_db';
import { Logo, LogoSmall } from '@/components/icons/Logo';
import ProMode from '@/components/ProMode';
import Configuration from '@/components/Configuration';
import LightAndDarkModeButton from '@/components/LightDarkButton';
import { NotificationsProvider } from '@mantine/notifications';
import { rtlCache } from '../rtl-cache';

const myCache = createEmotionCache({ key: 'my-prefix' });

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
const [supabaseClient] = useState(() =>  createBrowserSupabaseClient<Database>());
useEffect(() => {
  document.body.classList?.remove('loading');
}, []);
const { Component, pageProps } = props;
const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

const toggleColorScheme = (value?: ColorScheme) => {
  const nextColorScheme = value || (colorScheme === 'light' ? 'dark' : 'light');
  setColorScheme(nextColorScheme);
  setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
};
  

  return (
    <>
        <Head>
        <title>PantallaVerde</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      
      <div>
      <SessionContextProvider supabaseClient={supabaseClient}>
        <MyUserContextProvider>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
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

        <AppShell padding="sm" navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm" fixed header={
              <Header height={75} p="xl" sx={{ borderBottom: 0 }} >
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <SimpleGrid cols={3}>
                      <Configuration />  
                      <Group><Center><LogoSmall /></Center></Group>
                    </SimpleGrid>
                    </MediaQuery>

                    <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                  
                    <Grid justify="space-around" align="center" >
                      <Grid.Col span={2}><Logo /></Grid.Col>
                      <Grid.Col span={2}><Group><Center><ProMode /><Configuration /></Center></Group></Grid.Col>
                  </Grid>
                  </MediaQuery>
                </Header>}
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.white },
            })}
          >
            <NotificationsProvider>
            <Component {...pageProps} />
            </NotificationsProvider>
            <Analytics />
        </AppShell>
            </MantineProvider>
            </ColorSchemeProvider>
        </MyUserContextProvider>
        </SessionContextProvider></div>
      </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};