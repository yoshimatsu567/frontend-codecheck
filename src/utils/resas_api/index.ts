import axios from 'axios';

import { PrefectureType, ResasErrorType } from '@/types';

import { NEXT_PUBLIC_API_KEY } from '@/utils/constants/index';

export const fetchPrefectureList = async () => {
    let data: PrefectureType[] = [];
    let error: ResasErrorType = undefined;

    await axios
        .get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
            headers: { 'X-API-KEY': NEXT_PUBLIC_API_KEY() },
        })
        .then((res) => {
            data = res.data.result;

            const statusCode = res.data.statusCode;
            if (!data && statusCode !== 200) {
                // responseに都道府県のデータがない && statusCodeが200でない場合をErrorと判定する
                error = { name: statusCode, message: res.data.message };
            }
        });

    return { data, error };
};

export const fetchPopulationDataByPrefCode = async (prefCode: number) => {
    let data!: { year: number; value: number }[];
    let error: { name: string; message: string } | undefined = undefined;

    await axios
        .get(
            `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?&prefCode=${prefCode}`,
            {
                headers: { 'X-API-KEY': NEXT_PUBLIC_API_KEY() },
            }
        )
        .then((res) => {
            data = res.data.result?.data[0]?.data;
            const statusCode = res.data.statusCode;
            if (!data && statusCode !== 200) {
                // responseに都道府県のデータがない && statusCodeが200でない場合をErrorと判定する
                error = { name: statusCode, message: res.data.message };
            }
        });

    return { data, error };
};
