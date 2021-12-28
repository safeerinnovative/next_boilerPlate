import { useRouter } from "next/router"
import Head from 'next/Head'
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function pageNo() {

    const [CurrentData, setCurrentData] = useState([])
    const [CurrentCode, setCurrentCode] = useState(String.empty)

    const router = useRouter();
    const pageNumber = router.query.pageNo;

    useEffect(() => {
        setCurrentCode(pageNumber)
        if(pageNumber){
            setCurrentDataToState()
        }
    }, [pageNumber])

    const setCurrentDataToState = async () => {
        let dummyData = await axios.get(`https://jsonplaceholder.typicode.com/todos/${pageNumber}`)
        setCurrentData(dummyData.data)
    }

    setTimeout(() => {
        console.log(CurrentData)
    }, 5000);

    return (
        <section>
            <Head>
                <title>Blog {pageNumber}</title>
                <meta name="description" content="Next Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>My Blog {CurrentData.id} Page</h1>
                <p>{CurrentData.title}</p>
            </div>
        </section>
    )
}