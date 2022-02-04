import styles from './assets/css/Home.module.css'
import Link from 'next/Link'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'

export default function ErrorPage() {

    const router = useRouter();

    setTimeout(() => {
        router.push('/')
    }, 3000);

    return (
        <section>
            <div className={styles.errorHead}>
                <h1>Error 404 Page</h1>
                <Link href='/'>
                    <a>Back to Home Page</a>
                </Link>
            </div>
        </section>
    )
}