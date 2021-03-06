import { getGalleryImages } from '../lib/api'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Gallery from 'react-photo-gallery'
import PageTitle from '../components/page-title'

export default function Index({ galleryImages }) {

  return (
    <>
      <Layout>
        <Head>
          <title>Nina J Kors</title>
        </Head>
        
        <Container>
          <Header />

          <PageTitle>Sketchbook</PageTitle>

          <Gallery photos={galleryImages} direction={"column"} ></Gallery>          
          
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
