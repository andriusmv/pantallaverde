import { GoBack } from "@/components/GoBack";
import { Center, Title, Text, SimpleGrid } from "@mantine/core";
import Link from "next/link";

export default function Custom404() {
    return (
    <div>
    <SimpleGrid cols={1}>
        
        <Text italic align="center" color="teal.2" size="sm">
          Error 404 - Página no encontrada
        </Text>
          <Title size={45} align="center"
            sx={(theme) => ({ color: theme.colorScheme === 'dark' ? theme.white : theme.black })}>
              Uups...</Title>
          <Text size="md" weight={600} align="center" variant="gradient" gradient={{ from: 'teal.7', to: 'teal.2', deg: 33 }}>
          El curso/módulo/página/link que cliqueaste no existe <br/> o se movió a otro sitio. Vuelve atrás o al inicio de PantallaVerde.
          </Text>
          <GoBack />
        
        </SimpleGrid>
        </div>
    );
  }