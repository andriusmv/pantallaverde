import { Button, Text, Title, Center, SimpleGrid, Group, Aside, MediaQuery, Box, Space, ScrollArea } from '@mantine/core'
import ReactPlayer from 'react-player';
import Checkprogress from '@/components/Checkprogress';
import Link from 'next/link';
import MuxVideo from '@mux/mux-video-react';
import { GetStaticProps } from 'next';
import { supabase } from '@/utils/supabase-client';
import { Container } from 'tabler-icons-react';

const int1 = "📝 Introducción"
const int2 = "🔮 Preparar el equipo"
const int3 = "🎯 Realizar las tomas"
const int4 = "🚁 Procesar y Editar"
const int5 = "🧊 Publicar y Compartir"
const int6 = "🎞️ Renders 360°"
const int7 = "🧑‍🤝‍🧑 Integrar fotos con renders"
const int8 = "⛰️ Crea tu propia plataforma"
const int9 = "🧾 Apuntes Finales"

interface ToursProps {
  module: {id: string; title: string; description: string; video_url: string, duration: string, subtitle: string, file: string, course_id: string}[];
}


export default function ToursVirtuales({ module }: ToursProps) {

return (
<>
<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
    <Aside p="xs" hiddenBreakpoint="sm" width={{ sm: 225, lg: 325 }}>
  <ScrollArea h={2500} type="never">
    {module.map((module: {
                description: string;
                id: string;
                title: string; 
                video_url: string;}) => (
    <Button.Group orientation="vertical" key={module.id} >
      <Link href={`/cursos/toursvirtuales#${module.id}`}><Button variant="light" color="teal" fullWidth>{module.title}</Button></Link>
      </Button.Group>
            ))}
      </ScrollArea>
      </Aside>
              </MediaQuery>
              <SimpleGrid cols={1} spacing="lg">
              {module.map((module: {
                description: string;
                id: string;
                title: string; 
                video_url: string;}) => (
    <>
    <div key={module.title} id={module.id}>
    <Title size="h3">{module.title}</Title>
                  <MuxVideo
                    style={{ height: '100%', maxWidth: '100%' }}
                    playbackId={module.video_url}
                    streamType="on-demand"
                    controls
                    muted
                  />
                  </div>
                  <Space />
                  <Checkprogress />
                </>
        ))}
        </SimpleGrid>     
</>
)}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: module } = await supabase.from("module").select("*").in('course_id', ['toursvirtuales']).order('order', { ascending: true });
  
  return {
      props: {
        module,
      },
  };
};