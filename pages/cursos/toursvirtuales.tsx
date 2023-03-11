

import { Button, Text, Title, Center, SimpleGrid, Group, Aside, MediaQuery } from '@mantine/core'
import ReactPlayer from 'react-player';
import Checkprogress from '@/components/Checkprogress';
import Link from 'next/link';

const int1 = "📝 Introducción"
const int2 = "🔮 Preparar el equipo"
const int3 = "🎯 Realizar las tomas"
const int4 = "🚁 Procesar y Editar"
const int5 = "🧊 Publicar y Compartir"
const int6 = "🎞️ Renders 360°"
const int7 = "🧑‍🤝‍🧑 Integrar fotos con renders"
const int8 = "⛰️ Crea tu propia plataforma"
const int9 = "🧾 Apuntes Finales"


export default function ToursVirtuales() {

return (
<>
<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
    <Button.Group orientation="vertical">
      <Link href={'/cursos/toursvirtuales#introduccion'}><Button variant="light" color="teal" fullWidth>{int1}</Button></Link>
      <Link href={'/cursos/toursvirtuales#prepararelsitio'}><Button variant="light" color="teal" fullWidth>{int2}</Button></Link>
      <Link href={'/cursos/toursvirtuales#realizarlastomas'}><Button variant="light" color="teal" fullWidth>{int3}</Button></Link>
      <Link href={'/cursos/toursvirtuales#procesaryeditar'}><Button variant="light" color="teal" fullWidth>{int4}</Button></Link>
      <Link href={'/cursos/toursvirtuales#publicarcompartir'}><Button variant="light" color="teal" fullWidth>{int5}</Button></Link>
      {/* <Link href={'/cursos/toursvirtuales#renders360'}><Button variant="light" color="teal" fullWidth>{int6}</Button></Link>
      <Link href={'/cursos/toursvirtuales#creatupropiaplataforma'}><Button variant="light" color="teal" fullWidth>{int8}</Button></Link>
      <Link href={'/cursos/toursvirtuales#apuntesfinales'}><Button variant="light" color="teal" fullWidth>{int9}</Button></Link> */}
      <Link href={'/cursos/toursvirtuales#integrarfotosconrenders'}><Button variant="light" color="teal" fullWidth>{int7}</Button></Link>
      </Button.Group>
      </Aside>
              </MediaQuery>
              <SimpleGrid cols={1} spacing="lg">
        <Title id="introduccion" size="h2">{int1}</Title>
    <Group grow align="center">
    <ReactPlayer
            url="https://vimeo.com/552960629"
            controls
        />
        </Group>
    <Center><Checkprogress /></Center>
<Text size='md'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>


<Title id="prepararelsitio" size="h2">{int2}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://vimeo.com/552975300"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>Introducción general al uso de la técnica de Pantalla Verde o Chroma Key usada en la industria audiovisual (VFX).

</Text>

<Title id="realizarlastomas" size="h2">{int3}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://vimeo.com/552997085"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>Parte 1 - Manejo de un dron
Introducción al uso y manejo de un dron profesional para hacer la integración. Se usa un DJI Phantom 4, pero puede usarse cualquier otro tipo de marca y modelo de drones. Se habla de cuales son recomendados según el presupuesto de cada persona.

Es muy importante entender que entre más sencillo sea el desplazamiento en una toma de video en el dron y en el video-render mejor será el resultado. Si vemos películas de los mejores directores de cine de Hollywood nos daremos cuenta lo importante que es tener tomas de video tranquilas y desplazamientos unidireccionales (así el espectador del video entiende el proyecto con mayor facilidad).

Nota: se adjunta una lista de chequeo al final del email para que la tengas en cuenta a la hora de volar tu dron.
</Text>

<Title id="procesaryeditar" size="h2">{int4}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://vimeo.com/553005719"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>Parte 2 - Desplazamientos al volar
Se muestran los desplazamientos y formas ideales de hacer las tomas de video con el dron para facilitar que la integración con el editor de video y Lumion (el renderizado) sea más eficiente y no nos consuma tanto tiempo editando y corrigiendo desplazamientos muy "locos" o desordenados.

Material Descargable para ejecutar el Ejercicio 1
Vuelo Dron 01, link de descarga: https://drive.google.com/open?id=1c1hdRH7ti1MAOFdytD-kfX1Q-a1ZUyzj
Vuelo Dron 02, link de descarga: https://drive.google.com/open?id=1cM7X6uw419qen2jIiNqlsqi8Eism3plG
Vuelo Dron 03, link de descarga: https://drive.google.com/open?id=1JtaiCGtakb6jTdi7lWA2pnuHW5nxcXbR

La idea del ejercicio es que con tu propio dron (o prestado) hagas tres tomas similares ensayando los tres tipos de desplazamiento distintos: vertical, alejamiento y acercamiento, y uno adicional: el estático. Anímate a hacer ensayos y comenzar a explorar qué proyecto que ya tengas modelado puedes integrar en esas tomas.
</Text>

<Title id="publicarcompartir" size="h2">{int5}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://vimeo.com/553027935"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>Parte 1 - Preparación del 3D
En esta lección vemos cómo preparar el modelo 3d (bien sea desde SketchUp, Rhino, ArchiCAD, Revit, o cualquier otro editor) para luego integrarlo en el editor de video, luego de renderizarlo en Lumion u otro renderizador profesional. Se explica el principio de "pantalla verde" o chroma key en detalle.
Parte 2 - Estabilización de imagen (y editor de video)
Aquí vamos más a fondo con el efecto de estabilización de imagen para corregir las vibraciones que ocurren durante el vuelo del dron (por las corrientes del viento), ya que es inevitable que las haya. Por más esfuerzos por tener el dron estático o unidireccional, a veces debemos corregir o estabilizarlo en el editor de video para que se pueda integrar fácilmente con el video renderizado de Lumion.

Nota: recuerda que cuando renderizamos un video en Lumion o cualquier otro renderizador, las condiciones son perfectas, es decir, no hay viento ni condiciones climáticas que nos afecten el video que estamos renderizando o la imagen... mientras que en el vuelo del dron sí, tenemos variables que vuelven "imperfecto" el video que tomamos con este. Hay que encontrar el balance entre amas con el editor de video, en este caso trabajamos con Premiere de Adobe pero también puedes usar Davinci Resolve de BlackMagic que es gratuito.
Material Descargable para ejecutar el Ejercicio 3
Vuelo Dron 03, link de descarga: https://drive.google.com/open?id=1RRBf_S340Rqhsl92BGvxaGR1v6uPOzpy
Modelo 3d de la casa del ejemplo, link de descarga: https://drive.google.com/open?id=1dFfsdMqCB3Nj4xLq3ivaD295sYek1MrE
</Text>

{/* <Title id="renders360" size="h2">{int6}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://youtu.be/TPpIiUoC67c"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>
El Editor de Video
En esta lección vemos en detalle el editor de video: Premiere, de Adobe. Puedes usar también Davinci Resolve de Black Magic que es similar y es gratuito. Funcionan igual y con las mismas características.

Material Descargable para ejecutar el Ejercicio 4
Vuelo Dron 04, link de descarga: https://drive.google.com/open?id=1SIUG5aEJXBvTW3K0EMH71ypN6HHuaoo6
Renderizado desde Lumion, link de descarga: https://drive.google.com/open?id=1PnJ0tFwDKgoMkDGPw8QwHo51_3anxOMh

</Text> */}

<Title id="integrarfotosconrenders" size="h2">{int7}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://www.youtube.com/watch?v=9hh8hXGWf-Q"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>
    Aprende a integrar personas reales a partir del efecto chroma key.
</Text>

{/* <Title id="creatupropiaplataforma" size="h2">{int8}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://youtu.be/TPpIiUoC67c"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>Integración general a la fotogrametría.
</Text>


<Title id="apuntesfinales" size="h2">{int9}</Title>
<Group grow align="center">
<ReactPlayer
        url="https://youtu.be/TPpIiUoC67c"
        controls
      />
    </Group>
    <Center><Checkprogress /></Center>
    <Text size='md'>
    Cuánto cobrar por un video con la técnica de integración de Lumion con Drones?
</Text> */}

{/* <Center>
<Link href="/">
    <Button size="md">Grupo en Facebook del Grupo
    </Button>
        </Link></Center> */}
        </SimpleGrid>     
</>
)}