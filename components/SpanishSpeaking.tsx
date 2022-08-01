import { Image, Grid, Text } from '@mantine/core';

export default function SpanishSpeaking() {
  return (
    <Grid grow gutter="xs">
      <Grid.Col span={4}><Image radius="md" src="city-low-resol.png" /></Grid.Col>
      <Grid.Col span={2}><Text size="xl">Hola</Text></Grid.Col>
    </Grid>

    
  );
}