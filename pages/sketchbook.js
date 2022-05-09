import { getGalleryImages } from '../lib/api'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Gallery from 'react-photo-gallery'

export default function Index({ galleryImages }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Nina J Kors</title>
        </Head>
        
        <Container>
          <Header />

          <Gallery photos={galleryImages}></Gallery>          
          
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const galleryImages = (await getGalleryImages()) ?? []
  return {
    props: { galleryImages },
  }
}
