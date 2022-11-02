import React from 'react';
import { Group, Button, Anchor } from '@mantine/core';

export default function ProModeSmall() {

  return (
    <Group position="center">
        <Anchor href="/pro">
      <Button size="md" compact variant="outline" color="teal">Pro</Button></Anchor>
    </Group>
  );
}
