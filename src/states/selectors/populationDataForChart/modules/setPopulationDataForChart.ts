import Highcharts from 'highcharts';

import { PrefecturePopulationType } from '@/types/index';

export const setPrefecturePopulationDataForChart = (
    prefecturePopulationData: PrefecturePopulationType[]
) => {
    let prefecturePopulationDataLocal = [...prefecturePopulationData];
    let checkedSeriesData: Highcharts.SeriesOptionsType[] = [];
    // 都道府県が選択されていない場合表示するデータ
    const notCheckedSeriesData: Highcharts.SeriesOptionsType[] = [
        { type: 'line', name: '都道府県名', data: [] },
    ];
    let year: string[] = [];

    for (const populationDataItem of prefecturePopulationDataLocal) {
        let data: number[] = [];

        for (const item of populationDataItem.data) {
            const filteredItem = filterItemByYears(item, 1980, 2020);

            if (filteredItem) {
                data = [...data, item.value];
                year = [...year, String(item.year)];
            }
        }

        checkedSeriesData = [
            ...checkedSeriesData,
            { type: 'line', name: populationDataItem.name, data: data },
        ];
    }

    const prefecturePopulationOptionsData: Highcharts.Options = {
        accessibility: {
            enabled: false,
        },
        title: {
            text: '人口推移グラフ',
        },
        subtitle: {
            text: '出典: https://opendata.resas-portal.go.jp',
            style: {
                fontSize: '10px',
                color: '#606060',
            },
        },
        xAxis: {
            title: {
                text: '年度',
            },
            categories: year,
        },
        // 一つも選択されていない場合'都道府県名'のラベルを表示する
        series: !checkedSeriesData.length
            ? notCheckedSeriesData
            : checkedSeriesData,
        yAxis: {
            title: {
                text: '人口',
            },
            tickAmount: 5,
        },
        tooltip: {
            followPointer: true,
        },
    };

    return prefecturePopulationOptionsData;
};

/**
 *
 * @param item
 * @param min フィルター後、残したい最古の年代
 * @param max フィルター後、残したい最新の年代
 * @returns item or null
 */
const filterItemByYears = (
    item: {
        year: number;
        value: number;
    },
    min: number,
    max: number
) => {
    if (min <= item.year && item.year <= max) {
        return item;
    }
    return null;
};
