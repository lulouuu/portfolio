import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './components/About'
import Main from './components/Main'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lou Gomez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />

    </div>
  )
}