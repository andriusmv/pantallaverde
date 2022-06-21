import Link from 'next/link';
import { useUser } from '@/utils/useUser';
import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react';

interface EnsayoProps {
    lessons: {id: string; title: string; description: string}[];
}



export default function Ensayo({ lessons }: EnsayoProps) {
    console.log({ lessons });
    return (
        <div>
            {lessons.map((lesson: {
                description: ReactNode; id: Key | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined 
}) => (
                <p key={lesson.id}>{lesson.title}<br />{lesson.description}</p>
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