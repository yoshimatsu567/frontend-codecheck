import { SetterOrUpdater, useSetRecoilState } from 'recoil';

import { PrefectureCheckBoxType, PrefectureType } from '@/types';

import { checkedPrefectureState } from '@/states/atoms/checkedPrefectureAtom';
import { prefectureListState } from '@/states/atoms/prefectureListAtom';

export type UsePrefectureListType = () => {
    setPrefectureList: SetterOrUpdater<PrefectureType[]>;
    setCheckedPrefecture: SetterOrUpdater<PrefectureCheckBoxType | null>;
};

const usePrefectureList: UsePrefectureListType = () => ({
    setPrefectureList: useSetRecoilState(prefectureListState),
    setCheckedPrefecture: useSetRecoilState(checkedPrefectureState),
});

export default usePrefectureList;
