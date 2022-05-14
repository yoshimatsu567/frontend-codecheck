import type { NextPage } from 'next';

import { useRecoilValue } from 'recoil';

import { isLoadingState } from '@/states/atoms/asyncStatusAtom';

// components
import Head from 'next/head';
import { Header } from '@/components/molecules/common/Header';
import { Loading } from '@/components/atoms/common/Loading';
import PrefectureCheckBoxes from '@/components/organisms/PrefectureCheckboxes';
import { Main } from '@/components/molecules/common/Main';

const Home: NextPage = () => {
    const isLoading = useRecoilValue(isLoadingState);

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
            {isLoading ? <Loading /> : null}
            <Header />

            <Main>
                <PrefectureCheckBoxes />
            </Main>
        </>
    );
};

export default Home;
