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
            <div className="mt-6 text-xl">
              <p className="mb-2 text-2xl">
                Nina J. Kors is an Italian writer, poet, and podcaster. She narrates life and the world through visions that privilege feelings over facts and events.
              </p>
              <p className="mb-2">
                She is the author, producer and voice of the podcast <span className="italic">“Cosi nuda che non oso coprirmi”</span>, which topped the Italian Apple podcast charts. Her narrative delves deep into characters and their feelings. 
                For this reason, following a natural process of evolution, she decided to make ink drawings, in an experimental and self-searching attempt to make sense of feelings using no words. 
              </p>
                <p className="mb-2">
                  She is the author of articles, editorials, and book reviews published on the <span className="italic">Mimi</span> culture section of <span className="italic">Quotidiano del Sud</span>, an Italian national newspaper.
              </p>
              <Image src="/piazza-padova.jpg" width="1158" height="872"></Image>
              <Image src="/mimi01.jpg" width="1535" height="2388"></Image>
              <Image src="/quotidiandelsud-article01.jpg" width="1423" height="2202"></Image>
            </div>
          </div>

        </Container>
      </Layout>
    </>
  )
}


