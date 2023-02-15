import Link from 'next/link';
import { useState, ReactNode } from 'react';
import LoadingDots from 'components/ui/LoadingDots';
import Button from 'components/ui/Button';
import { useUser } from 'utils/useUser';
import { postData } from 'utils/helpers';
import { User } from '@supabase/supabase-js';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { ActionIcon, Alert, Center, CopyButton, Group, SimpleGrid, Space, Text, Title, Tooltip } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { BrandStripe, Check, Copy, Mail } from 'tabler-icons-react';
import { GoBack } from '@/components/GoBack';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {children}
      </div>
      <div>
        {footer}
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: '/signin' });

export default function Account({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link'
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <main>
    <GoBack />
    <Space h="lg" /> 
    <Center>
      <SimpleGrid cols={1}><Space h="xl" /><Space h="xl" />
        <div>
          <Group>
            <Title>
              Tu cuenta
            </Title>
            <div>
              <Avatar src={userDetails ? userDetails.avatar_url : undefined}></Avatar>
              <Text>{user ? user.email : undefined}</Text>
            </div>
          </Group>

          <div>
            {userDetails ? (
              `${userDetails.full_name ??
              `${userDetails.first_name} ${userDetails.last_name}`}`
            ) : (
              <div>
                <LoadingDots />
              </div>
            )}
          </div>
        </div>
        <div>
          <Card
            title="Tus cursos"
            description={subscription
              ? `Estás en el plan ${subscription?.prices?.products?.name}.`
              : ''}
            footer={<div>
              <p>
                Administra tu suscripción en Stripe.
              </p>
              <Button
                variant="slim"
                loading={loading}
                disabled={loading || !subscription}
                onClick={redirectToCustomerPortal}
              >
                Administrar mis pagos <BrandStripe />
              </Button>
            </div>}
          >
            <div>
              {isLoading ? (
                <div>
                  <LoadingDots />
                </div>
              ) : subscription ? (
                `${subscriptionPrice}/${subscription?.prices?.interval}`
              ) : (
                <Link href="/pro">
                  <Button>Escoge tu plan</Button>
                </Link>
              )}
            </div>
          </Card></div>
          <Alert icon={<Mail size={16} />} title="¿Necesitas ayuda aquí?" color="teal" radius="md" variant="outline">
      Escríbeme a esta dirección de correo electrónico con los detalles a emailpantallaverde@gmail.com
      <CopyButton value="mailto:emailpantallaverde@gmail.com" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
        <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </ActionIcon>
      </Tooltip>
      )}
    </CopyButton>
    </Alert>

      </SimpleGrid>
      </Center>
      </main>
  );
}
