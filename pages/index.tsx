import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/home/Hero'
import Technologies from '../components/home/Technologies'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Juan Portillo | Front-End Web Developer | Erie Colorado</title>
        <meta name="description" content="Juan Portillo is a front-end web developer with expertise in React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Technologies />
    </div>
  )
}

export default Home
