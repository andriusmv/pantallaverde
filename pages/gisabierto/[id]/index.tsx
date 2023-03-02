import supabase from '@/utils/supabase';
import { GetStaticProps } from 'next';
import { notFound } from "next/navigation";
import ReactPlayer from 'react-player';

export default async function Course({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data: gis } = await supabase
    .from("gis")
    .select()
    .match({ id })
    .single();

  if (!gis) {
    notFound();
  }

  return (
  <>
  <p key={gis.id}>
      {gis.title}<br />{gis.module}<br />{gis.description}<br />{gis.file}</p><div>
        <ReactPlayer url={gis.video_url} />
      </div>
      </>
);
}
