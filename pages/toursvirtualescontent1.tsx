import { GetStaticProps } from 'next'
import { supabase } from '@/utils/supabase-client';
import { Key, ReactChild, ReactFragment, ReactNode, ReactPortal, useState } from 'react';
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Title, Text, Space, Accordion, Pagination, MediaQuery, Anchor, Aside } from '@mantine/core';
import { ClipboardText } from 'tabler-icons-react';
import { usePagination } from '@mantine/hooks';

interface toursvirtualesProps {
    toursvirtuales: {id: string; title: string; description: string; video_url: string}[];
    }


export default function toursvirtuales({ toursvirtuales }: toursvirtualesProps) {
  
  const [activePage, setPage] = useState(1);

  

    return (
      <>
         {/* <div>
        <Pagination  position="center" page={activePage} onChange={setPage} total={10} color="teal" withEdges /> 
        </div> */}
        <div>
        
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        {toursvirtuales.map((toursvirtuales) => (
                <>
                <Text key={toursvirtuales.id}>{toursvirtuales.title}</Text></>))}
      </Aside>
              </MediaQuery>
              
        </div>
        <div>
            {toursvirtuales.map((toursvirtuales) => (
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
                    </div></>

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

