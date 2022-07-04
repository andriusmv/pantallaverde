import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Avatar } from '@mantine/core';
import { User } from 'tabler-icons-react';
import { UserDetails } from 'types';

interface AvatarsProps {
    Avatars: {user: string, id: string, avatar_url: string}[];
}



export default function Avatars() {
    
    return (
        <div>
            Hola avatars
        </div>
    )
}