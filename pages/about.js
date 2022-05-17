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
          <title>Nina J Kors - About</title>
        </Head>

        <Container>
          <Header />

          <PageTitle>About</PageTitle>
          
          <div className="px-5 sm:px-0">
            <div className="mt-16 text-xl">
              <span>Short bio goes here</span>
            </div>
          </div>

        </Container>
      </Layout>
    </>
  )
}


