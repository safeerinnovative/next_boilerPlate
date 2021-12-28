import Head from 'next/head'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Next Home Page</title>
        <meta name="description" content="Next Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>
      <Link href='/about'>
        <a>Go To About Page</a>
      </Link>

    </section>
  )
}
