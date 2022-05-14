import { atom } from 'recoil';
import { AtomKeys } from '@/states/recoilKeys';

import { PrefecturePopulationType } from '@/types';

export const populationDataState = atom<PrefecturePopulationType[]>({
    key: AtomKeys.PREFECTURE_POPULATION_DATA_STATE,
    default: [],
});

export const populationCacheDataState = atom<PrefecturePopulationType[]>({
    key: AtomKeys.PREFECTURE_POPULATION_CACHE_DATA_STATE,
    default: [],
});
