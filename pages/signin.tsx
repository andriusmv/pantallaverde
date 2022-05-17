import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { useUser } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

import Button from 'components/ui/Button';
import GitHub from 'components/icons/GitHub';
import Input from 'components/ui/Input';
import LoadingDots from 'components/ui/LoadingDots';
import { Provider } from '@supabase/supabase-js';
import { getURL } from '@/utils/helpers';
import { Paper, Space, Text, Title } from '@mantine/core'



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
  const { user } = useUser();

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    const { error } = await supabaseClient.auth.signIn(
      { email, password },
      { redirectTo: getURL() }
    );
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    if (!password) {
      setMessage({
        type: 'note',
        content: 'Check your email for the magic link.'
      });
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider: Provider) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signIn({ provider });
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
        <Paper shadow="md" p="md" withBorder>
          
          <div>
            <Title>Please Sign In 👨‍🌾</Title>
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
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
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
                  Send magic link
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
                  placeholder="Password"
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
                  Sign-in
                </Button>
              </form>
            )}
            <Text>
              <a
                href="#"
                onClick={() => {
                  if (showPasswordInput) setPassword('');
                  setShowPasswordInput(!showPasswordInput);
                  setMessage({});
                }}
              >
                {`Or sign in with ${
                  showPasswordInput ? 'magic link' : 'password'
                }.`}
              </a>
            </Text>
                <Space h="xl" />
        
        
            <Text>
              Are you a new user?
              {` `}
              <Link href="/signup">
                <Title order={2}>
                  Sign up here 👈
                </Title>
              </Link>
            </Text>
          </div>

          <div className="flex items-center my-6">
            <div
              className="border-t border-zinc-600 flex-grow mr-3"
              aria-hidden="true"
            ></div>
            <div className="text-zinc-400">Or</div>
            <div
              className="border-t border-zinc-600 flex-grow ml-3"
              aria-hidden="true"
            ></div>
          </div>

          <Button
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn('github')}
          >
            <GitHub />
            <span className="ml-2">Continue with GitHub</span>
          </Button>
        
        </Paper>
      </div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
};

export default SignIn;
