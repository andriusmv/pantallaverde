import Link from 'next/link';
import { useUser } from '@/utils/useUser';
import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react';
import React from 'react'
import ReactPlayer from 'react-player/lazy'


interface EnsayoProps {
    lessons: {id: string; title: string; description: string; video_url: string}[];
}



export default function Ensayo({ lessons }: EnsayoProps) {
    console.log({ lessons });
    return (
        <div>
            {lessons.map((lesson: {
                description: ReactNode; id: Key | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
                video_url: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;}) => (
                <p key={lesson.id}>{lesson.title}<br />{lesson.description}<br />
                </p> 
                //<ReactPlayer url={lesson.video_url} />
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { data: lessons } = await supabase.from("lesson").select("*")
    
    return {
        props: {
            lessons,
        },
    };
};