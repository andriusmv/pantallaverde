import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'

export default function CommentPage() {
  const router = useRouter()
  const id = router.query.id as string
  const modulo = router.query.modulo as string
  const videourl = router.query.videourl as string
  const vimeourl = "https://vimeo.com/"
  const vimeourl2 = {videourl}
  const vimeoall = "https://vimeo.com/1232"

  return (
    <>
      <div>
      <h1>Curso: {id}</h1>
      <h1>Módulo: {modulo}</h1>
      <h1>Módulo: {vimeourl}</h1>
      <ReactPlayer url={vimeoall} />
      </div>
    </>
  )
}