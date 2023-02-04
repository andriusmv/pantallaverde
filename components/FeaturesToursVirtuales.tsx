import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Avatar, Space } from '@mantine/core';
import { Clock2, Lock, CircleDotted, DevicesPc } from 'tabler-icons-react';

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
    icon: Clock2,
    title: 'Rápido y al grano',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: DevicesPc,
    title: 'Con tus herramientas',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: CircleDotted,
    title: 'Actualización continua',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: Lock,
    title: 'Personal y privado',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
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
          <Avatar src="amv.jfif" alt="Instructor Andres Moreno Vasquez" size="lg" radius="xl" />
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