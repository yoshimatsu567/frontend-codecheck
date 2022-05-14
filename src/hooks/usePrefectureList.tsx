import { useCallback, useEffect } from 'react';

import { SetterOrUpdater, useRecoilState, useSetRecoilState } from 'recoil';
import { useErrorHandler } from 'react-error-boundary';

import { isLoadingState } from '@/states/atoms/asyncStatusAtom';
import { prefectureListState } from '@/states/atoms/prefectureListAtom';

import { fetchPrefectureList } from '@/utils/resas_api';

import { checkedPrefectureState } from '@/states/atoms/checkedPrefectureAtom';
import { PrefectureType, PrefectureCheckBoxType } from '@/types';

export type UsePrefectureListType = () => {
    prefectureList: PrefectureType[];
    setCheckedPrefecture: SetterOrUpdater<PrefectureCheckBoxType | null>;
};

const usePrefectureList: UsePrefectureListType = () => ({
    // チェックボックス用の都道府県のデータ
    prefectureList: useFetchPrefectureList(),
    setCheckedPrefecture: useSetRecoilState(checkedPrefectureState),
});

export default usePrefectureList;

export const useFetchPrefectureList = () => {
    const [prefectureListData, setPrefectureListData] =
        useRecoilState(prefectureListState);
    const setIsLoading = useSetRecoilState(isLoadingState);
    const handleError = useErrorHandler();

    useEffect(() => {
        if (!prefectureListData.length) {
            fetchPrefectureList().then((res) => {
                if (res.error) {
                    handleError(res.error);
                }
                setPrefectureListData(res.data);
                setIsLoading(false);
            });
        }
    }, []);

    return prefectureListData;
};
