import { selector } from 'recoil';

import { PrefecturePopulationType } from '@/types/index';

import { populationDataState } from '@/states/atoms/prefecturePopulationDataAtom';
import { setPrefecturePopulationDataForChart } from './modules/setPopulationDataForChart';
import { SelectorKeys } from '@/states/recoilKeys';

export const populationDataForChartState = selector({
    key: SelectorKeys.POPULATION_DATA_FOR_CHART,
    get: ({ get }) => {
        const populationData: PrefecturePopulationType[] =
            get(populationDataState);

        return setPrefecturePopulationDataForChart(populationData);
    },
});
