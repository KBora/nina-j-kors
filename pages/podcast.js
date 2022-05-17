import { getGalleryImages } from '../lib/api'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'

export default function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>Nina J Kors - Podcast</title>
        </Head>

        <Container>
          <Header />

          <PageTitle>Podcast</PageTitle>

          <div className="px-5 sm:px-0">
            <div className="mt-16 text-xl">
              <span className="mr-3">Check out my English language podcast: </span>
              <a className="text-fuchsia-700 font-bold" href="https://www.spreaker.com/show/too-naked-to-hide">
                https://www.spreaker.com/show/too-naked-to-hide
              </a>
            </div>

            <div className="mt-16 text-xl">
              <span className="mr-3">Italian podcast on Apple: </span>
              <a className="text-fuchsia-700 font-bold" href="https://podcasts.apple.com/it/podcast/trailer/id1567747470?i=1000521828393">
                Romanzo Così nuda che non oso coprirmi
              </a>
            </div>
          </div>
          


        </Container>
      </Layout>
    </>
  )
}
