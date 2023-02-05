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
    title: 'El formato 360°',
    description: 'Qué es una foto 360°, un render 360° y en qué sectores se están aplicando. Cómo sacar provecho de esto.',
  },
  {
    icon: Home2,
    title: 'Preparar el sitio',
    description: 'Qué equipo seleccionar y qué tener en cuenta a la hora de realizar una visita. Cómo adecuar el sitio previo a realizar la toma de imágenes.',
  },
  {
    icon: Photo,
    title: 'Realizar las tomas',
    description:
      'Cómo realizar las tomas 360° en cada espacio. Tipos de tomas y cómo se articulan.',
  },
  {
    icon: DevicesPc,
    title: 'Procesamiento y edición',
    description:
      '¿Cómo subir a la nube y qué software (Saas) utilizar dependiendo del presupuesto? ¿Qué editar de cada fotografía?',
  },
];

export function FeaturesToursVirtuales() {
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
            Un curso completo para aprender a hacer recorridos virtuales
          </Title>
          <Text color="dimmed">
            Aprende desde el principio los conceptos básicos – El formato de foto 360°,
            cómo agruparlas en un recorrido y cómo publicarlo en una plataforma web.
          </Text>
          <Space h="lg" />
          <Group>
          <Avatar src="amv.jfif" alt="Instructor Andres Moreno Vasquez" size="lg" radius="xl" />
          <Link href="https://drive.google.com/file/d/1cC9jWuapmiOc-MP1p0V9y4z5LfGPaaM3/view?usp=sharing">
            <Button color="gray" rightIcon={<Download size={14} />}>Contenido del curso PDF</Button>
          </Link></Group>
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