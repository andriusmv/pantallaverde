import { useContext, useState } from 'react';
import { Anchor, Aside, Box, Button, Container, Group, MediaQuery, Paper, Text, Title } from '@mantine/core'
import ReactPlayer from 'react-player';

export default function toursvirtuales(props: any) {

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 0,
        },
      };

return (
<>
<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Text><Anchor variant="text" size="md" href={'/toursvirtuales#instrucciones'}>📝 Instrucciones</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#elformato360'}>💡 El formato 360°</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#prepararelsitio'}>🧹 Preparar el sitio</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#realizarlastomas'}>👀 Realizar las tomas</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#procesamientoyedicion'}>💻 Procesamiento y edición</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#entornohdri'}>🌎 Entorno HDRI</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#subiragooglemaps'}>🗺️ Subir a Google Maps</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#proveedoresdetours'}>🔗 Proveedores de Tours</Anchor></Text>
      <Text><Anchor variant="text" size="md" href={'/toursvirtuales#apuntesfinales'}>🧾 Apuntes Finales</Anchor></Text>
              </Aside>
              </MediaQuery>
<Title id="instrucciones">📝 Instrucciones</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552975300"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="elformato360">💡 El formato 360°</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552960629"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="prepararelsitio">🧹 Preparar el sitio</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552997085"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="realizarlastomas">👀 Realizar las tomas</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/553027935"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="procesamientoyedicion">💻 Procesamiento y edición</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/553027935"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="entornohdri">🌎 Entorno HDRI</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552960629"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="subiragooglemaps">🗺️ Subir a Google Maps</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552960629"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="proveedoresdetours">🔗 Proveedores de Tours</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552960629"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

<Title id="apuntesfinales">🧾 Apuntes Finales</Title>
<div>
<ReactPlayer
        url="https://vimeo.com/552960629"
        width='100%'
        height='100%'
      />
      </div>
<Text size='xl'>Hay tres formas de integrar una toma con dron: por trackeo, por edición de video y por nube de puntos. El curso se enfoca en la segunda.
Adicionalmente el último módulo explica el tercer método en su forma más básica: la Fotogrametría con nube de puntos.
Sí puedes moverte por donde quieras del modelo con el tercer método (nube de puntos), teniendo en cuenta que la densidad de la nube y la calidad gráfica del resultado final depende 100% del PC que tengas para correr nubes de puntos (archivos muy pesados).
</Text>

</>
)}

