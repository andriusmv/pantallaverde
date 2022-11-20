import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import LoadingDots from 'components/ui/LoadingDots';
import { Provider } from '@supabase/supabase-js';
import { getURL } from '@/utils/helpers';
import { Anchor, Group, Paper, Space, Text, Title, Center } from '@mantine/core'
import { BrandGithub, BrandGoogle, Key } from 'tabler-icons-react'



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: ''
  });
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    let error;
    if (!password) {
      const res = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: getURL() }
      });
      error = res.error;
    } else {
      const res = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      error = res.error;
    }
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    if (!password) {
      setMessage({
        type: 'note',
        content: 'Revisa tu correo para el link mágico.'
      });
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true);
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider,
    options: { redirectTo: getURL() }
  });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.replace('/account');
    }
  }, [user]);

  if (!user)

    return (
      <div>
        <Space h={100} />
        <Center>
        <Paper shadow="md" p="md" withBorder>
          
            <Title id="pleasesignin" order={2}>Inicia Sesión <Key /></Title>
            <Space h="xl" />
          <div>              

            {message.content && (
              <div
                className={`${
                  message.type === 'error' ? 'text-pink-500' : 'text-green-500'
                } border ${
                  message.type === 'error'
                    ? 'border-pink-500'
                    : 'border-green-500'
                } p-3`}
              >
                {message.content}
              </div>
            )}

            {!showPasswordInput && (
              <form onSubmit={handleSignin}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Button
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!email.length}
                >
                  Enviar link mágico
                </Button>
              </form>
            )}

            {showPasswordInput && (
              <form onSubmit={handleSignin}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <Button
                  className="mt-1"
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!password.length || !email.length}
                >
                  Inicia Sesión
                </Button>
              </form>
            )}
            <Text>
              <Anchor
                href="#"
                onClick={() => {
                  if (showPasswordInput) setPassword('');
                  setShowPasswordInput(!showPasswordInput);
                  setMessage({});
                }}
              >
                <Text>
                {`... o ingresa tu  ${
                  showPasswordInput ? 'link mágico' : 'contraseña'
                }.`}</Text>
              </Anchor>
            </Text>
                <Space h="xl" />
        
        
            <Text>
              No te has registrado todavía?
              {` `}
              <Anchor href="/signup">
                
                  Regístrate aquí 👈
                
              </Anchor>
            </Text>
          </div>

          <div className="flex items-center my-6">
            <div
              className="border-t border-zinc-600 flex-grow mr-3"
              aria-hidden="true"
            ></div>
            <div className="text-zinc-400">o...</div>
            <Space h="xl" />
            <div
              className="border-t border-zinc-600 flex-grow ml-3"
              aria-hidden="true"
            ></div>
          </div>
<Group>
          <Button
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn('github')}
          >
            
            <Group><BrandGithub /> Identifícate con GitHub</Group>
          </Button>

          <Button
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn('google')}
          >
            
            <Group><BrandGoogle /> Identifícate con Google</Group>
          </Button>
          </Group>
        </Paper>
        </Center></div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
