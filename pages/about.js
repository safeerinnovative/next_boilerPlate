import Head from 'next/Head'
import Link from 'next/Link'

export default function About() {
    return (
        <section id='about-page'>
            <Head>
                <title>Next About Page</title>
                <meta name="description" content="Next About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>About Page</h1>
                <Link href='/'>
                    <a>Go To Home Page</a>
                </Link>
            </div>
        </section>
    )
}
