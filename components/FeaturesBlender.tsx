import Link from 'next/link';
import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Avatar, Space, Group } from '@mantine/core';
import { Home2, DevicesPc, Photo, Download, ThreeDCubeSphere } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: ThreeDCubeSphere,
    title: 'El código abierto',
    description: 'Entender la diferencia entre gratuito y de código abierto es fundamental para entender Blender y sentir su libertad.',
  },
  {
    icon: Home2,
    title: 'Blender CRUD',
    description: 'Herramientas básicas para comenzar a modelar. Girar, extruir, borrar, añadir. CRUD (crear, leer, actualizar y borrar).',
  },
  {
    icon: Photo,
    title: 'Fotorealismo',
    description:
      'Blender incluye dos motores de renderizado: Eeve y Cycles. Veremos la diferencia y veremos las claves para el fotorealismo.',
  },
  {
    icon: DevicesPc,
    title: 'Procedurales & Nodos',
    description:
      'Texturas procedurales y nodos de geometría para que tus modelos corran ligeros como el viento.',
  },
];

export function FeaturesBlender() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'green', to: 'teal' }}>
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Un curso para aprender Blender desde cero
          </Title>
          <Text color="dimmed">
            Aprenderás a modelar, aplicar texturas, nodos de geometría – Renderizado,
            cómo vincular otros programas de código abierto y mantenerlo actualizado.
          </Text>
          <Space h="lg" />
          <Group>
          <Avatar src="amv.jfif" alt="Instructor Andres Moreno Vasquez" size="lg" radius="xl" />
          <Link href="https://drive.google.com/file/d/1-TcePaoP9HEW0RRpZKs6JeKoiRPE3A1c/view?usp=share_link">
            <Button
            color="gray"
            rightIcon={<Download size={14} />}>
              Contenido del curso PDF
              </Button></Link>
          </Group>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}