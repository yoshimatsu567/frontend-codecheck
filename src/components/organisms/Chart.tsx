import React from 'react';

import { useRecoilValue } from 'recoil';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styled from 'styled-components';

import { usePopulationData } from '@/hooks/usePopulationData';
import { populationDataForChartState } from '@/states/selectors/populationDataForChart';

const Chart: React.FC = () => {
    // 都道府県がチェックされるたびに、チェックされた都道府県の人口推移データを取得する
    usePopulationData();
    
    const populationDataForChart = useRecoilValue(populationDataForChartState);

    return (
        <ChartContainer>
            <HighchartsReact
                highcharts={Highcharts}
                options={populationDataForChart}
            />
        </ChartContainer>
    );
};

export default React.memo(Chart);

const ChartContainer = styled.section`
    width: 100%;
    margin: 40px 0;
`;
