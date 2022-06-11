import Link from 'next/link';
import { useUser } from '@/utils/useUser';
import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';

interface EnsayoProps {
    lessons: string
}

export default function Ensayo({ lessons }: EnsayoProps) {
    console.log({ lessons });
    return (
        <div>
            {lessons.map((lesson: { id: Key | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                <p key={lesson.id}>{lesson.title}</p>
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