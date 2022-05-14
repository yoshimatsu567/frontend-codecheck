import { atom } from 'recoil';
import { AtomKeys } from '../recoilKeys';

import { PrefectureCheckBoxType } from '@/types';

export const checkedPrefectureState = atom<PrefectureCheckBoxType | null>({
    key: AtomKeys.CHECKED_PREFECTURE_STATE,
    default: null,
});
