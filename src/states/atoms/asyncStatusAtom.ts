import { atom } from 'recoil';

import { AtomKeys } from '@/states/recoilKeys';

type IsLoadingType = boolean;

export const isLoadingState = atom<IsLoadingType>({
    key: AtomKeys.IS_LOADING_STATE,
    default: true,
});
