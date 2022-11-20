import Link from 'next/link';
import { useState, ReactNode } from 'react';

import LoadingDots from 'components/ui/LoadingDots';
import Button from 'components/ui/Button';
import { useUser } from 'utils/useUser';
import { postData } from 'utils/helpers';
import { User } from '@supabase/supabase-js';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { Center, SimpleGrid, Space, Text } from '@mantine/core';
import { Avatar } from '@mantine/core';

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
    <Center>
    <SimpleGrid cols={1}><Space h="xl"/><Space h="xl"/>
      <div>
        <div>
          <h1>
            Tu cuenta
          </h1>
      <div>
        <Avatar src={userDetails ? userDetails.avatar_url : undefined}></Avatar>
        {user ? user.email : undefined}
      </div>
        </div>
        <div>
            {userDetails ? (
              `${
                userDetails.full_name ??
                `${userDetails.first_name} ${userDetails.last_name}`
              }`
            ) : (
              <div>
                <LoadingDots />
              </div>
            )}
          </div>
      </div>
      <div>
        <Card
          title="Your Plan"
          description={
            subscription
              ? `Estás en el plan ${subscription?.prices?.products?.name}.`
              : ''
          }
          footer={
            <div>
              <p>
                Administra tu suscripción en Stripe.
              </p>
              <Button
                variant="slim"
                loading={loading}
                disabled={loading || !subscription}
                onClick={redirectToCustomerPortal}
              >
                Abrir portal de usuario
              </Button>
            </div>
          }
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
        
    </SimpleGrid></Center>
  );
}
