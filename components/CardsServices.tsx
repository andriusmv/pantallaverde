import { Card, Group, Image, Text, Tabs, Button, SimpleGrid, Divider, MediaQuery } from "@mantine/core";
import Link from "next/link";

export function CardsServices() {

  return (
    <>
<Divider my="xl" label="CURSOS" labelPosition="center" labelProps={{ size: '12', weight: '500' }} />

<SimpleGrid cols={2}>
<Card shadow="sm" p="lg" radius="md" withBorder>
<Card.Section>
  <Image
    src="/unit-min.png"
    alt="Tours virtuales"
    />
</Card.Section>

<Group position="center" mt="md" mb="xs">
  <Text weight={500}>Tours Virtuales</Text>
</Group>
<Text size="sm" color="dimmed">
  Aprende a crear recorridos virtuales desde cero. Desde cuál cámara 360 comprar hasta cómo crear tu propia plataforma web.
</Text>
<Link href={'/toursvirtuales'}><Button color="teal" fullWidth mt="xs" radius="md">Me interesa</Button></Link>
<Link href={'/account'}><Button variant="light" color="teal" fullWidth mt="xs" radius="md">Acceder</Button></Link>
</Card>

<Card shadow="sm" p="lg" radius="md" withBorder>
<Card.Section>
  <Image
    src="/terrain-min.png"
    alt="GIS"
    />
</Card.Section>

<Group position="center" mt="md" mb="xs">
  <Text weight={500}>GIS de código abierto</Text>
</Group>

<Text size="sm" color="dimmed">
  Usar GIS para análisis geoespacial de cualquier lote o parcela.
  Buscar bases de datos públicas para tu próximo proyecto.
</Text>

<Link href={'/gis'}><Button color="teal" fullWidth mt="xs" radius="md">Me interesa</Button></Link>
<Link href={'/account'}><Button variant="light" color="teal" fullWidth mt="xs" radius="md">Acceder</Button></Link>
</Card>

<Card shadow="sm" p="lg" radius="md" withBorder>
<Card.Section>
  <Image
    src="/city-low-resol.png"
    alt="City GIS"
    />
</Card.Section>

<Group position="center" mt="md" mb="xs">
  <Text weight={500}>Integración 3D con Drones</Text>
</Group>

<Text size="sm" color="dimmed">
  Aprende a integrar renders aéreos en video con drones.
  Usa Lumion o Blender.
</Text>

<Link href={'/integracion'}><Button color="teal" fullWidth mt="xs" radius="md">Me interesa</Button></Link>
<Link href={'/account'}><Button variant="light" color="teal" fullWidth mt="xs" radius="md">Acceder</Button></Link>
</Card>

<Card shadow="sm" p="lg" radius="md" withBorder>
<Card.Section>
  <Image
    src="/Suzzane.png"
    alt="Blender"
    />
</Card.Section>

<Group position="center" mt="md" mb="xs">
  <Text weight={500}>Blender 3D desde cero</Text>
</Group>

<Text size="sm" color="dimmed">
  Blender desde cero. Aprende el software de código abierto más poderoso del mundo.
</Text>

<Link href={'/blender'}><Button color="teal" fullWidth mt="xs" radius="md">Me interesa</Button></Link>
<Link href={'/account'}><Button variant="light" color="teal" fullWidth mt="xs" radius="md">Acceder</Button></Link>
</Card>

</SimpleGrid>

<Divider my="xl" label="SERVICIOS" labelPosition="center" labelProps={{ size: '12', weight: '500' }} />

<SimpleGrid cols={2}>
<Card shadow="sm" p="lg" radius="md" withBorder>
<Card.Section>
  <Image
    src="/unit-min.png"
    alt="Renders Inmersivos"
    />
</Card.Section>

<Group position="center" mt="md" mb="xs">
  <Text weight={500}>Renders Inmersivos</Text>
</Group>

<Text size="sm" color="dimmed">
  Recorridos virtuales privados, modelos 3D interactivos en tu web, dashboards y más.
</Text>
<Link href={'https://calendly.com/pantallaverdeweb/llamar'}><Button variant="light" color="blue" fullWidth mt="xs" radius="md">
  Solicitar cotización
</Button></Link>
</Card>

<Card shadow="sm" p="lg" radius="md" withBorder>
<Card.Section>
  <Image
    src="/terrain-min.png"
    alt="Terreno"
    />
</Card.Section>

<Group position="center" mt="md" mb="xs">
  <Text weight={500}>Análisis GIS</Text>
</Group>

<Text size="sm" color="dimmed">
  Te puedo ayudar a encontrar el sitio ideal para tu próximo proyecto.
</Text>

<Link href={'https://calendly.com/pantallaverdeweb/llamar'}><Button variant="light" color="blue" fullWidth mt="xs" radius="md">  Agendar videollamada
</Button></Link>
</Card>
</SimpleGrid>


</>
  );
}

export default CardsServices;