import React, { useState } from 'react';
import { createStyles, Switch, Group, useMantineColorScheme, Text } from '@mantine/core';
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
      <div className={classes.root}>
        <Rocket className={cx(classes.icon, classes.iconLight)} size={18} />
        <RocketOff className={cx(classes.icon, classes.iconDark)} size={18} />
        <Link href="/pro"><Switch size="md" checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} /></Link>
      </div>
      <Text>Volverse PRO</Text>
    </Group>
  );
}
