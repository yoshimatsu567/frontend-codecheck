import type { GetStaticProps } from 'next';

import { useRecoilValue } from 'recoil';

import { isLoadingState } from '@/states/atoms/asyncStatusAtom';

import { PrefectureType } from '@/types';

import { fetchPrefectureList } from '@/utils/resas_api';

// components
import Header from '@/components/molecules/common/Header';
import Loading from '@/components/atoms/common/Loading';
import PrefectureCheckBoxes from '@/components/organisms/PrefectureCheckboxes';
import Main from '@/components/molecules/common/Main';
import Chart from '@/components/organisms/Chart';
import HeadContainer from '@/components/molecules/common/HeadContainer';

type StaticProps = {
    prefectureList: PrefectureType[];
};

const Home: React.FC<StaticProps> = ({ prefectureList }) => {
    const isLoading = useRecoilValue(isLoadingState);

    return (
        <>
            <HeadContainer />
            {isLoading ? <Loading /> : null}
            <Header />
            <Main>
                <PrefectureCheckBoxes prefectureList={prefectureList} />
                <Chart />
            </Main>
        </>
    );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
    const prefectureList = await fetchPrefectureList().then((res) => {
        return res.data;
    });
    return {
        props: { prefectureList: prefectureList },
    };
};

export default Home;
