import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Avatar, Space, Group } from '@mantine/core';
import Link from 'next/link';
import { Home2, Lock, DevicesPc, Photo, Download, ThreeDCubeSphere } from 'tabler-icons-react';

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
    title: 'El Efecto Chroma',
    description: 'Lo que se conoce como "pantalla verde". Aprenderás a reemplazar un color sólido de fondo en video usando un editor de video.',
  },
  {
    icon: Home2,
    title: 'Camera Tracking',
    description: 'Traqueo de cámara con Blender con puntos de referencia. Integrarás modelos 3d en videos reales tomados con tu dron.',
  },
  {
    icon: Photo,
    title: 'Realizar las tomas',
    description:
      'Cómo realizar las tomas con tu dron para que se integren correctamente con tu modelo 3d. Cómo te desplazarte con tu dron.',
  },
  {
    icon: DevicesPc,
    title: 'Procesamiento y edición',
    description:
      '¿Cómo hacer la edición de video y publicar tu video finalizado?¿Cómo usar un editor de video desde cero?',
  },
];

export function FeaturesIntegracion() {
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
            Un curso para integrar Drones con un modelo 3D
          </Title>
          <Text color="dimmed">
            Aprenderás los principios del camera tracking y el efecto chroma – Drones,
            cómo volarlos para integrar con tu modelo 3D desde cualquier software.
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