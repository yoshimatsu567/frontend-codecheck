import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { devices } from '@/styles/theme/devices';

type MainProps = {
    children: ReactNode;
};

const Main: React.FC<MainProps> = (props) => {
    return (
        <MainContainer>
            <MainDummyElement />
            {props.children}
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.main`
    margin: 0px 200px 0;

    @media ${devices.desktop} {
        margin: 0 20px;
    }

    @media ${devices.tablet} {
        margin: 0;
    }
`;
const MainDummyElement = styled.div`
    height: 80px;

    @media ${devices.tablet} {
        height: 65px;
    }
`;
