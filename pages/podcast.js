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
          <title>Nina J Kors - Podcast</title>
        </Head>

        <Container>
          <Header />

          <PageTitle>Podcast</PageTitle>

          <div className="px-5 sm:px-0">
            <div className="mt-16 text-xl">
              <div lassName="mr-3">Check out my podcast 'Too naked to hide':</div>
              
              <div className="mt-4 font-bold">Spreaker (English)</div>
              <a className="text-fuchsia-700 font-bold" href="https://www.spreaker.com/show/too-naked-to-hide">
                Too naked to hide
              </a>

              <div className="mt-4 font-bold">Google Podcasts (English) </div>
              <a className="text-fuchsia-700 font-bold" href="https://www.google.com/podcasts?feed=aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNTU2MDExOC9lcGlzb2Rlcy9mZWVk">
                Too naked to hide
              </a>

              <div className="mt-4 font-bold">Apple Podcasts (Italiano) </div>
              <a className="text-fuchsia-700 font-bold" href="https://podcasts.apple.com/it/podcast/trailer/id1567747470?i=1000521828393">
                Così nuda che non oso coprirmi
              </a>

            </div>

            <div className="mt-16 mb-16 text-xl">
              <div lassName="mr-3">Gruppo Telegram</div>

              <div className="mt-4 font-bold">Gruppo Telegram (Italiano)</div>
              <a className="text-fuchsia-700 font-bold" href=" https://t.me/ninalegge">
                https://t.me/ninalegge
              </a>
            </div>

            <Image src="/submarine.jpg" width="2000" height="1341"></Image>

          </div>
          


        </Container>
      </Layout>
    </>
  )
}
