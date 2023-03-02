import supabase from '@/utils/supabase';
import { GetStaticProps } from 'next';
import { notFound } from "next/navigation";

export default async function Courses({
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
  <p key={gis.id}>
  {gis.title}<br/>{gis.module}<br/>{gis.description}<br/>{gis.video_url}</p>
);
}
