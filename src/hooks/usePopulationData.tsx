import { useEffect } from 'react';

import { useErrorHandler } from 'react-error-boundary';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';

import { isLoadingState } from '@/states/atoms/asyncStatusAtom';
import { checkedPrefectureState } from '@/states/atoms/checkedPrefectureAtom';
import {
    populationDataState,
    populationCacheDataState,
} from '@/states/atoms/prefecturePopulationDataAtom';

import { fetchPopulationDataByPrefCode } from '@/utils/resas_api';

/**
 * 都道府県がチェックされるたびに、チェックされた都道府県の人口推移データを取得する
 */
export const usePopulationData = () => {
    const setIsLoading = useSetRecoilState(isLoadingState);
    const checkedPrefecture = useRecoilValue(checkedPrefectureState);
    const [populationData, setPopulationData] =
        useRecoilState(populationDataState);
    const [populationCacheData, setPopulationCacheData] = useRecoilState(
        populationCacheDataState
    );
    const handleError = useErrorHandler();

    useEffect(() => {
        if (checkedPrefecture) {
            if (checkedPrefecture.checked) {
                setIsLoading(true);

                const findCachedData = populationCacheData.find(
                    (item) => item.name === checkedPrefecture.prefName
                );
                if (findCachedData) {
                    // 既に取得したことのあるデータであれば過去に取得したデータをsetする
                    const prefPopulationAndCacheData = [
                        ...populationData,
                        {
                            name: checkedPrefecture.prefName,
                            data: findCachedData.data,
                        },
                    ];
                    setPopulationData(prefPopulationAndCacheData);
                    setIsLoading(false);
                    return;
                }

                fetchPopulationDataByPrefCode(checkedPrefecture.prefCode).then(
                    (res) => {
                        if (res.error) {
                            handleError(res.error);
                        } else {
                            const fetchedPrefPopulation = [
                                ...populationData,
                                {
                                    name: checkedPrefecture.prefName,
                                    data: res.data,
                                },
                            ];
                            setPopulationData(fetchedPrefPopulation);

                            const fetchedPrefPopulationAndCacheData = [
                                ...populationCacheData,
                                {
                                    name: checkedPrefecture.prefName,
                                    data: res.data,
                                },
                            ];
                            setPopulationCacheData(
                                fetchedPrefPopulationAndCacheData
                            );
                        }
                        setIsLoading(false);
                    }
                );
            }
            // チェックが外された場合
            else {
                setIsLoading(true);
                const deletedPrefPopulation = populationData.filter(
                    (item) => item.name !== checkedPrefecture.prefName
                );
                setPopulationData(deletedPrefPopulation);
                setIsLoading(false);
            }
        }
    }, [checkedPrefecture]);
};
