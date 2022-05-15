import type { GetStaticProps } from 'next';

import { useRecoilValue } from 'recoil';

import { isLoadingState } from '@/states/atoms/asyncStatusAtom';

import { PrefectureType } from '@/types';

import { fetchPrefectureList } from '@/utils/resas_api';

// components
import Loading from '@/components/atoms/common/Loading';
import HeadContainer from '@/components/molecules/common/HeadContainer';
import Header from '@/components/molecules/common/Header';
import Main from '@/components/molecules/common/Main';
import PrefectureCheckBoxes from '@/components/organisms/PrefectureCheckboxes';
import Chart from '@/components/organisms/Chart';

type StaticProps = {
    prefectureList: PrefectureType[];
};

const Home: React.FC<StaticProps> = ({ prefectureList }) => {
    const isLoading = useRecoilValue(isLoadingState);

    return (
        <>
            {isLoading ? <Loading /> : null}
            <HeadContainer />
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
