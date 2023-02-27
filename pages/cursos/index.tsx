import { ActionIcon, Alert, Box, Center, Container, CopyButton, Grid, Group, MantineProvider, SimpleGrid, Space, Stack, Title, Tooltip } from "@mantine/core";
import Link from "next/link";
import { Button, Text } from '@mantine/core';
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { GoBack } from "@/components/GoBack";
import { supabase } from "@/utils/supabase-client";
import { GetStaticProps } from "next";
import { Mail, Check, Copy } from "tabler-icons-react";


// export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function Cursos() {
    
    return(

        <main>
            <GoBack />
        <SimpleGrid cols={1} spacing="xl">
            <Space h="lg" />
            <Title order={1} align="center" size={40}
            sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>
                Ingresa a un curso
            </Title>
            <Text size={24} weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
                Haz clic en cualquiera ☟</Text>
            
            
            <Container size="lg" px="md">
            <Stack spacing="xs" justify="center">
                <Grid  align="center" gutter={5}>
                    <Grid.Col span={6}><Box><Text>Curso Tours Virtuales</Text></Box></Grid.Col>
                    <Grid.Col span="auto"><Link href={'/cursos/toursvirtuales'}>
                        <Button variant="light" color="teal" mt="xs" radius="md">Acceder</Button></Link>
                    </Grid.Col>
                </Grid>
                <Grid  align="center" gutter={5}>
                    <Grid.Col span={6}><Box><Text>Curso Integración Drones con 3D</Text></Box></Grid.Col>
                    <Grid.Col span="auto"><Link href={'/cursos/integracion'}>
                        <Button variant="light" color="teal" mt="xs" radius="md">Acceder</Button></Link>
                    </Grid.Col>
                </Grid>
                <Grid  align="center" gutter={5}>
                    <Grid.Col span={6}><Box><Text>Curso GIS de Código Abierto</Text></Box></Grid.Col>
                    <Grid.Col span="auto"><Link href={'/cursos/gis'}>
                        <Button variant="light" color="teal" mt="xs" radius="md">Acceder</Button></Link>
                    </Grid.Col>
                </Grid>
                <Grid  align="center" gutter={5}>
                    <Grid.Col span={6}><Box><Text>Curso Blender 3D desde Cero</Text></Box></Grid.Col>
                    <Grid.Col span="auto"><Link href={'/cursos/blender'}>
                        <Button variant="light" color="teal" mt="xs" radius="md">Acceder</Button></Link>
                    </Grid.Col>
                </Grid>
            </Stack>
            </Container>
        </SimpleGrid>
        <Space h="lg" />  
        <Space h="lg" />  
        <Center>
        <Alert icon={<Mail size={16} />} title="¿No encuentras el curso que buscas?" color="teal" radius="md" variant="outline">
      Escríbeme a esta dirección de correo electrónico <br /> con más detalles a <br />
      <Group>
        <Text> emailpantallaverde@gmail.com</Text>
        <CopyButton value="emailpantallaverde@gmail.com" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
        <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </ActionIcon>
      </Tooltip>
      )}
    </CopyButton></Group>
    </Alert>
        </Center>
      </main>
    )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//     const { data: cursos } = await supabase.from("cursos").select("*")
    
//     return {
//         props: {
//             cursos,
//         },
//     };
// };