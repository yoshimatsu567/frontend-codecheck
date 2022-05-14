import { atom } from 'recoil';
import { AtomKeys } from '../recoilKeys';

import { PrefectureType } from '@/types';

export const prefectureListState = atom<PrefectureType[]>({
    key: AtomKeys.PREFECTURE_LIST_STATE,
    default: [],
});
