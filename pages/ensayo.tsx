import Link from 'next/link';
import { useUser } from '@/utils/useUser';
import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Accordion } from '@mantine/core';
import { ClipboardText } from 'tabler-icons-react';


interface EnsayoProps {
    toursvirtuales: {id: string; title: string; description: string; video_url: string}[];
}



export default function Ensayo({ toursvirtuales }: EnsayoProps) {
    return (
        <div>
            {toursvirtuales.map((toursvirtuales: {
                description: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
                id: Key | null | undefined;
                title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; 
                video_url: string;}) => (
                <>
                <Title key={toursvirtuales.id}>{toursvirtuales.title}</Title>
                <Space h='xl' />
                <ReactPlayer url={toursvirtuales.video_url} />
                <Space h='xl' />
                <Accordion variant="contained">
                  <Accordion.Item value="Descripción">
                   <Accordion.Control icon={<ClipboardText size={20} color='teal' />}>
                    Descripción de la lección en texto e imágenes
                    </Accordion.Control>
                    <Accordion.Panel>
                    <Text>{toursvirtuales.description}</Text>
                    </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
                </>
            ))}
        </div>
    );
}


export const getStaticProps: GetStaticProps = async (context) => {
    const { data: toursvirtuales } = await supabase.from("toursvirtuales").select("*")
    
    return {
        props: {
            toursvirtuales,
        },
    };
};