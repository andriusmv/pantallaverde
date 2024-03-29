import Link from "next/link";
import { Avatar, Box, Button, Divider, Grid, Stack, Text } from "@mantine/core";

export function ListServices() {

    return (
      <>

<Divider my="xl" label="CURSOS" labelPosition="center" labelProps={{ size: '12', weight: '500' }} />
<Stack spacing="lg" justify="flex-start">
<Grid grow align="center" gutter={5}>
<Grid.Col span="auto">
    <Avatar src="/unit-min.png" alt="Tours virtuales" size="md" radius="xl" />
</Grid.Col>
      <Grid.Col span={6}><Box><Text>Curso Tours Virtuales</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'/toursvirtuales'}>
        <Button color="teal" mt="xs" radius="md">Me interesa</Button></Link>
</Grid.Col>
      <Grid.Col span="auto"><Link href={'/account'}>
        <Button variant="light" color="teal" mt="xs" radius="md">Acceder</Button></Link>
</Grid.Col>
    </Grid>

    {/* <Grid grow align="center" gutter={5}>
<Grid.Col span="auto">
    <Avatar src="/terrain-min.png" alt="Curso GIS" size="md" radius="xl" />
</Grid.Col>
      <Grid.Col span={6}><Box><Text>Curso GIS de Código Abierto</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'/gis'}>
        <Button color="teal" mt="xs" radius="md" disabled>Me interesa</Button></Link>
</Grid.Col>
      <Grid.Col span="auto"><Link href={'/account'}>
        <Button variant="light" color="teal" mt="xs" radius="md" disabled>Acceder</Button></Link>
</Grid.Col>
    </Grid>

    <Grid grow align="center" gutter={5}>
<Grid.Col span="auto">
    <Avatar src="/city-low-resol.png" alt="Curso Drones con 3D" size="md" radius="xl" />
</Grid.Col>
      <Grid.Col span={6}><Box><Text>Curso Drones con 3D</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'/integracion'}>
        <Button color="teal" mt="xs" radius="md" disabled>Me interesa</Button></Link>
</Grid.Col>
      <Grid.Col span="auto"><Link href={'/account'}>
        <Button variant="light" color="teal" mt="xs" radius="md" disabled>Acceder</Button></Link>
</Grid.Col>
    </Grid>

    <Grid grow align="center" gutter={5}>
<Grid.Col span="auto">
    <Avatar src="/Suzzane.png" alt="Curso Blender desde Cero" size="md" radius="xl" />
</Grid.Col>
      <Grid.Col span={6}><Box><Text>Curso Blender 3D desde Cero</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'/blender'}>
        <Button color="teal" mt="xs" radius="md" disabled>Me interesa</Button></Link>
</Grid.Col>
      <Grid.Col span="auto"><Link href={'/account'}>
        <Button variant="light" color="teal" mt="xs" radius="md" disabled>Acceder</Button></Link>
</Grid.Col>
    </Grid> */}

<Divider my="xl" label="SERVICIOS" labelPosition="center" labelProps={{ size: '12', weight: '500' }} />


<Grid grow align="center" gutter={5}>
<Grid.Col span="auto">
    <Avatar src="/unit-min.png" alt="Servicio Renders" size="md" radius="xl" />
</Grid.Col>
      <Grid.Col span={6}><Box><Text>Servicio Renders Inmersivos</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'https://calendly.com/pantallaverdeweb/llamar'}>
        <Button color="blue" variant="light" mt="xs" radius="md">Solicitar una cotización</Button></Link>
</Grid.Col>  
    </Grid>
    
    <Grid grow align="center" gutter={5}>
<Grid.Col span="auto">
    <Avatar src="/terrain-min.png" alt="Servicio Renders Inmersivos" size="md" radius="xl" />
</Grid.Col>
      <Grid.Col span={6}><Box><Text>Servicio Análisis GIS</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'https://calendly.com/pantallaverdeweb/llamar'}>
        <Button color="blue" variant="light" mt="xs" radius="md">Agendar videollamada</Button></Link>
</Grid.Col>  
    </Grid>

</Stack>

</>
);
    }