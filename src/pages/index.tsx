import type { NextPage } from 'next';

// components
import Head from 'next/head';
import { Header } from '@/components/molecules/common/Header';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>県別の総人口推移表示するアプリ</title>
                <meta
                    name='description'
                    content='県別の総人口推移表示するアプリ'
                />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <Header />
        </>
    );
};

export default Home;
