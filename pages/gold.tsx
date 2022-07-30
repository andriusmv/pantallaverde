import { useRouter } from 'next/router';
import { useState } from 'react';

import { postData } from 'utils/helpers';
import { getStripe } from 'utils/stripe-client';
import { useUser } from 'utils/useUser';
import { Price, ProductWithPrice } from 'types';
import { SimpleGrid, Paper, Text, Title, Group, Space, List, ThemeIcon, Button } from '@mantine/core';
import { CircleCheck, CircleDashed, UserCheck, UserPlus, UserSearch } from 'tabler-icons-react';
import ListadoTours from 'components/ListadoTours';

interface Props {
  products: ProductWithPrice[];
}

type BillingInterval = 'year' | 'month';

export default function Pricing({ products }: Props) {
  const router = useRouter();
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const { user, isLoading, subscription } = useUser();

  const handleCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);
    if (!user) {
      return router.push('/signin');
    }
    if (subscription) {
      return router.push('/account');
    }

    try {
      const { sessionId } = await postData({
        url: '/api/create-checkout-session',
        data: { price }
      });

      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      return alert((error as Error)?.message);
    } finally {
      setPriceIdLoading(undefined);
    }
  };



  return (
    <>
      <SimpleGrid cols={1} spacing="xl">
        <Paper withBorder p="xl">
          <Title>Curso Tours Virtuales 🥇</Title>
          <Space h="xl" />
          <Text size="xl">Disponible para miembros Pro 🔒</Text>
          <Space h="xl" />
          <Button>Comenzar</Button>
          
        </Paper>
        <Paper withBorder p="xl">
          <Text size="xl">De qué se trata?</Text>
          <Space h="xl" />
          <List
      spacing="xs"
      size="xl"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <CircleCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Es un curso básico, para principiantes.</List.Item>
      <List.Item>Es un curso en línea, a tu propio ritmo.</List.Item>
      <List.Item>Es un curso que puedes completar en aproximadamente 3 días.</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <CircleDashed size={16} />
          </ThemeIcon>
        }
      >
        Está enfocado en el sector inmobiliario y arquitectónico.
      </List.Item>
    </List>

          </Paper>
          <Paper withBorder p="xl">
<Text size="xl">Contenido del curso:</Text>
        <Space h="xl" />
          <ListadoTours />
</Paper>
<Paper withBorder p="xl">
<Text size="xl">A quién va dirigido?</Text>
<Space h="xl" />

<List
      spacing="xs"
      size="xl"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <UserCheck size={16} />
        </ThemeIcon>
      }
    >
      <List.Item>Promotores/agencias inmobiliarias (marketing, fotografía, ventas).</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <UserSearch size={16} />
          </ThemeIcon>
        }
      >
        Arquitectos que quieran crear recorridos virtuales con sus modelos 3D (Revit, Lumion, Blender, etc).
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon color="gray" size={24} radius="xl">
            <UserPlus size={16} />
          </ThemeIcon>
        }
      >
        Amateurs o curiosos del tema que quieran aprender a hacerlo.
      </List.Item>
    </List>
        <Space h="xl" />
</Paper>
          </SimpleGrid>
          <Group spacing="xl">
        </Group>
      </>);
}