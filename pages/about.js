import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import Image from 'next/image'

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
            <p className="mb-12">
                Nina J. Kors is an Italian writer, poet, and podcaster. She narrates life and the world through visions that privilege feelings over facts and events. She is the author, producer and voice of the podcast <span className="italic">“Cosi nuda che non oso coprirmi”</span>, which topped the Italy Apple podcast charts. Her narrative delves deep into characters and their feelings. For this reason, following a natural process of evolution, she decided to make ink drawings, in an experimental and self-searching attempt to make sense of feelings using no words. She is the author of articles, editorials, and book reviews published on the “Mimi” culture section of <span className="italic"></span>Quotidiano del Sud, an Italian national newspaper.
            </p>
            <Image src="/piazza-padova.jpg" width="1158" height="872"></Image>

            </div>
          </div>

        </Container>
      </Layout>
    </>
  )
}


