import { useState, useRef } from 'react';
import { SegmentedControl, Text, createStyles, Paper, Title, Space, NumberInput } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');

  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
      textTransform: 'uppercase',
      letterSpacing: -0.25,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: '50px',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },

    footer: {
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      paddingTop: theme.spacing.md,
    },
  };
});

const tabs = {
  month: [
    { link: '', label: '€ 13' },
  ],
  year: [
    { link: '', label: '€ 159' },
  ],
  lifetime: [
    { link: '', label: '€ 300' },
  ],
};

export function SegmentedPricing() {
  const { classes, cx } = useStyles();
  const [section, setSection] = useState<'month' | 'year' | 'lifetime'>('month');
  const [active, setActive] = useState('Billing');
  const ref = useRef<HTMLInputElement>(null);

  const links = tabs[section].map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <span>{item.label}</span>
    </a>

  ));

  return (
<>
        <Paper shadow="md" p="xl" withBorder>
        <Title order={1} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>
        Una inyección de tecnología,</Title>
        <Title order={1} align="center"
      sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black, })}>
        infinitas posibilidades</Title>
        <Space h="xl" />
        <Text size="xl" weight={600} align="center" color="teal">
        Learn the skills you need to advance your career and build real-world business focused professional projects on the job and for your portfolio
        </Text>
        <Space h="xl" />

        <SegmentedControl
          value={section}
          onChange={(value: 'month' | 'year' | 'lifetime') => setSection(value)}
          transitionTimingFunction="ease"
          
          data={[
            { label: 'Mensualidad', value: 'month' },
            { label: 'Anualidad', value: 'year' },
            { label: 'Un solo pago', value: 'lifetime' },
          ]}
        />

        {links}
        <NumberInput
              defaultValue={1}
              placeholder="usuarios"
              label="Usuarios"
              required
              ref={ref}
        />
        </Paper>
        </>
  );
}