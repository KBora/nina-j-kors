import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { PlayIcon } from '@heroicons/react/outline'


export default function Index() {

  return (
    <>
      <Layout>
        <Head>
          <title>Nina J Kors</title>
        </Head>
        
        <Container>
          <Header />          
        </Container>

        <div className="">
      
          <div className="fixed inset-0 w-screen h-screen z-30 pointer-events-none">
            <div className="flex w-full h-full justify-center items-center ">
              <Link href="/podcast">
                <div className="cursor-pointer">
                  <PlayIcon className="block h-24 w-24" aria-hidden="true" />
                </div>                
              </Link>
            </div>
          </div>

          <div className="fixed inset-0 w-screen h-screen pointer-events-none z-10">              
            <div className="flex min-w-full min-h-full justify-center items-center pointer-events-none">
              <motion.svg
                  style={{ scale: 2, originX: '50%', originY: '50%' }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                  className="" width="500px" height="500px" viewBox="0 0 500 500">
                  <def>
                    <path id="circle-1" d="M309 250C309 282.585 282.585 309 250 309C217.415 309 191 282.585 191 250C191 217.415 217.415 191 250 191C282.585 191 309 217.415 309 250Z" />
                    
                    <path id="circle-3" d="M369 250C369 315.722 315.722 369 250 369C184.278 369 131 315.722 131 250C131 184.278 184.278 131 250 131C315.722 131 369 184.278 369 250Z" />
                    
                    <path id="circle-5" d="M429 250C429 348.859 348.859 429 250 429C151.141 429 71 348.859 71 250C71 151.141 151.141 71 250 71C348.859 71 429 151.141 429 250Z" />
                    
                  </def>
                  <text
                    className="circles__text circles__text--1">
                    <textPath className="circles__text-path" xlinkHref="#circle-1" aria-label="" >Too naked to hide. 7am He woke up feeling cranky</textPath>
                  </text>

                  
                  <text
                    className="circles__text circles__text--3">
                    <textPath className="circles__text-path" xlinkHref="#circle-3" aria-label="" >That meant it wasn’t even 7.30. He brushed his face with a hand, took a long breath and reached to the &nbsp;</textPath>
                  </text>

                  
                  <text
                    className="circles__text circles__text--5">
                    <textPath className="circles__text-path" xlinkHref="#circle-5" aria-label="" >again (“The wrong side”, she had told him once), and now his arm was numb. He was still confused but his spirits kept sinking by the second. </textPath>
                  </text>
                  
              </motion.svg>  
            </div>   
          </div>

          <div className="fixed inset-0 w-screen h-screen pointer-events-none z-10">            
            <div className="flex min-w-full min-h-full justify-center items-center pointer-events-none">
              <motion.svg
                style={{ scale: 2, originX: '50%', originY: '50%' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 55, ease: "linear", repeat: Infinity }}
                className="circles" width="500px" height="500px" viewBox="0 0 500 500">
                <def>

                  <path id="circle-2" d="M339 250C339 299.153 299.153 339 250 339C200.847 339 161 299.153 161 250C161 200.847 200.847 161 250 161C299.153 161 339 200.847 339 250Z" />

                  <path id="circle-4" d="M399 250C399 332.29 332.29 399 250 399C167.71 399 101 332.29 101 250C101 167.71 167.71 101 250 101C332.29 101 399 167.71 399 250Z" />

                  <path id="circle-6" d="M459 250C459 365.428 365.428 459 250 459C134.572 459 41 365.428 41 250C41 134.572 134.572 41 250 41C365.428 41 459 134.572 459 250Z" />
                </def>


                <text
                  className="circles__text circles__text--2">
                  <textPath className="circles__text-path" xlinkHref="#circle-2" aria-label="">The phone hadn’t rang yet as the bells started to chime in the distance. &nbsp;</textPath>
                </text>

                <text
                  animate={{ rotate: -360 }}
                  transition={{ duration: 16, ease: "linear", repeat: Infinity }}
                  className="circles__text circles__text--4">
                  <textPath className="circles__text-path" xlinkHref="#circle-4" aria-label="" >nightstand for his glasses. The room was immersed in darkness, as usual, the blinds well shut. He had slept on his right side &nbsp; </textPath>
                </text>

                <text>
                  <textPath
                    className="circles__text-path" xlinkHref="#circle-6" aria-label="" >
                    It was going to be a hell of a day. He knew it. He looked at his cell phone screen. It was dark. No texts messages that morning. No texts for the rest of the day, either. No messages.
                  </textPath>
                </text>
              </motion.svg>
            </div>
          </div>
          
        </div>         
      </Layout>
    </>
  )
}

