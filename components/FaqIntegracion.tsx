import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const prerequisitos = 'Cinco módulos en video que se actualizan cada trimestre. Se acompañan de texto explicativo y archivos descargables para cada caso.';
const ondemand = 'Los módulos base son grabados y editados previamente. Así que los ves a tu ritmo, haciendo pausa en donde quieras y volviéndolos a ver cuantas veces quieras.';
const gratis = 'Puedes ver todo el contenido que ponemos en YouTube gratis. Lo que está aquí es un contenido más premium para los que van en serio con este tema y quieren lograr clientes y contratos reales en sus empresas.';
const arrepiento = 'Sin problema, tienes una semana si decides arrepentirte. Tu dinero es devuelto sin preguntas. Nos interesan las relaciones de largo tiempo, no de corta duración.';
const payment = 'Tienes dos opciones: por suscripción o por un solo pago. Puedes pagar un sólo curso que te interesa, o puedes pagar la suscripción PRO que te da acceso a todos los cursos por menos precio mientras la sigas pagando. Si decides comprar un solo curso, tendrás acceso por 1 año.';

export default function FaqIntegracion() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="prerequisitos">
          <Accordion.Control>👉 Pre-requisitos</Accordion.Control>
          <Accordion.Panel>{prerequisitos}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="ondemand">
          <Accordion.Control>¿Debo verlo de inmediato o cuando quiera?</Accordion.Control>
          <Accordion.Panel>{ondemand}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="gratis">
          <Accordion.Control>¿Por qué no es gratis?</Accordion.Control>
          <Accordion.Panel>{gratis}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="arrepiento">
          <Accordion.Control>¿Qué pasa si me arrepiento o no me gusta?</Accordion.Control>
          <Accordion.Panel>{arrepiento}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>¿Qué métodos de pago hay?</Accordion.Control>
          <Accordion.Panel>{payment}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}