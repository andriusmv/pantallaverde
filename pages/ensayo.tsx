import Link from 'next/link';
import { useUser } from '@/utils/useUser';
import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Accordion, Center, SimpleGrid } from '@mantine/core';
import { ClipboardText } from 'tabler-icons-react';



interface EnsayoProps {
    toursvirtuales: {id: string; title: string; description: string; video_url: string}[];
}


export default function Ensayo({ toursvirtuales }: EnsayoProps) {
    return (
        <div>
            <Center>
                <SimpleGrid cols={1}>
            {toursvirtuales.map((toursvirtuales: {
                description: string;
                id: string;
                title: string; 
                video_url: string;}) => (
                <>
                <Title key={toursvirtuales.id}>{toursvirtuales.title}</Title>
                <Space h='xl' />
                <ReactPlayer url={toursvirtuales.video_url} />
                <Space h='xl' />
                <Accordion variant="separated" >
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
        </SimpleGrid></Center></div>
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