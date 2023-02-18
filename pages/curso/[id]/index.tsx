import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CursoPage() {
  const router = useRouter()
  const id = router.query.id as string
  const modulo = router.query.modulo as string
  const videourl = router.query.videourl as string

  return (
    <>
      <h1>Curso: {id}</h1>
      <ul>
        <li>
          <Link href={`/curso/${id}/${modulo}/`}>Tours Virtuales</Link>
        </li>
        <li>
          <Link href={`/curso/${id}/integracion`}>Integracion</Link>
        </li>
      </ul>
    </>
  )
}