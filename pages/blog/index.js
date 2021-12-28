import Head from 'next/Head';
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function index() {

    const [CurrentData, setCurrentData] = useState(String.empty)

    useEffect( async () => {
        let dummyData = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        setCurrentData(dummyData.data);
        console.log(dummyData.data)
    }, [])

    return (
        <section>
            <Head>
                <title>Next Blog Index Page</title>
                <meta name="description" content="Next About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>Blog Index Page</h1>
            </div>
        </section>
    )
};