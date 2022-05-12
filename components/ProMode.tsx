import React, { useState } from 'react';
import { createStyles, Switch, Group, useMantineColorScheme, Text, Button, Anchor } from '@mantine/core';
import { Rocket, RocketOff } from 'tabler-icons-react';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    '& *': {
      cursor: 'pointer',
    },
  },

  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 1,
    top: 3,
  },

  iconLight: {
    left: 4,
    color: theme.white,
  },

  iconDark: {
    right: 4,
    color: theme.colors.gray[6],
  },
}));

export default function ProMode() {
  const { classes, cx } = useStyles();
  const [checked, setChecked] = useState(false);

  return (
    <Group position="center">
        <Anchor href="/pro">
      <Button variant="default">Upgrade ⭐</Button></Anchor>
    </Group>
  );
}
