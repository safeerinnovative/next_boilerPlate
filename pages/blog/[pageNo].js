import { useRouter } from "next/router"
import Head from 'next/Head'

export default function pageNo() {

    const router = useRouter();
    const pageNumber = router.query.pageNo;

    return (
        <section>
            <Head>
                <title>Blog {pageNumber}</title>
                <meta name="description" content="Next Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>My Blog {pageNumber} Page</h1>
            </div>
        </section>
    )
}