import type { NextPage } from 'next';

import { useRecoilValue } from 'recoil';

import { isLoadingState } from '@/states/atoms/asyncStatusAtom';

// components
import { Header } from '@/components/molecules/common/Header';
import { Loading } from '@/components/atoms/common/Loading';
import PrefectureCheckBoxes from '@/components/organisms/PrefectureCheckboxes';
import { Main } from '@/components/molecules/common/Main';
import Chart from '@/components/organisms/Chart';
import HeadContainer from '@/components/molecules/common/HeadContainer';

const Home: NextPage = () => {
    const isLoading = useRecoilValue(isLoadingState);

    return (
        <>
            <HeadContainer />
            {isLoading ? <Loading /> : null}
            <Header />
            <Main>
                <PrefectureCheckBoxes />
                <Chart />
            </Main>
        </>
    );
};

export default Home;
