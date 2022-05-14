import React from 'react';

import { useRecoilValue } from 'recoil';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styled from 'styled-components';

import { usePopulationData } from '@/hooks/usePopulationData';
import { populationDataForChartState } from '@/states/selectors/populationDataForChart';

const Chart: React.FC = () => {
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

export default Chart;

const ChartContainer = styled.div`
    width: 100%;
    margin: 40px 0;
`;
