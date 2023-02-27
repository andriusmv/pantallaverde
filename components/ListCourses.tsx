import Link from "next/link";
import { Avatar, Box, Button, Divider, Grid, Stack, Text } from "@mantine/core";

export default function ListCourses() {

    return (
      <>

<Stack spacing="xs" justify="center">
<Grid  align="center" gutter={5}>
      <Grid.Col span={6}><Box><Text>Curso Tours Virtuales</Text></Box></Grid.Col>
      <Grid.Col span="auto"><Link href={'/cursos/toursvirtuales'}>
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

      <Grid.Col span={6}><Box><Text>Curso Integración Drones con 3D</Text></Box></Grid.Col>

      <Grid.Col span="auto"><Link href={'/cursos/integracion'}>
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

</>
);
    }