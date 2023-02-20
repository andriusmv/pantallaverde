import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { User } from '@supabase/supabase-js';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { updateUserName } from 'utils/supabase-client';
import { Center } from '@mantine/core';

const SignUp = () => {
  const supabaseClient = useSupabaseClient();
  const [newUser, setNewUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type?: string; content?: string }>({
    type: '',
    content: ''
  });
  const router = useRouter();
  const user = useUser();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});
    const {
      error,
      data: { user: createdUser }
    } = await supabaseClient.auth.signUp({
      email,
      password
    });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    } else {
      if (createdUser) {
        await updateUserName(createdUser, name);
        setNewUser(createdUser);
      } else {
        setMessage({
          type: 'note',
          content: 'Revisa tu email para el link de confirmación.'
        });
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (newUser || user) {
      router.replace('/account');
    }
  }, [newUser, user]);

  return (
    <div className="flex justify-center height-screen-helper">
    <Center>
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 ">
        </div>
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
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
          <Input placeholder="Name" onChange={setName} />
          <Input
            type="email"
            placeholder="Email"
            onChange={setEmail}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
          <div className="pt-2 w-full flex flex-col">
            <Button
              variant="slim"
              type="submit"
              loading={loading}
              disabled={loading || !email.length || !password.length}
            >
              Regístrate
            </Button>
          </div>

          <span className="pt-1 text-center text-sm">
            <span className="text-zinc-200">Tienes una cuenta?</span>
            {` `}
            <Link href="/signin">
              <a className="text-accent-9 font-bold hover:underline cursor-pointer">
                Inicia sesión.
              </a>
            </Link>
          </span>
        </form>
      </div></Center>
    </div>
  );
};

export default SignUp;
