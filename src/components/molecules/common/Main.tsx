import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { devices } from '@/styles/theme/devices';

type MainProps = {
    children: ReactNode;
};

export const Main: React.FC<MainProps> = (props) => {
    return <MainContainer>{props.children}</MainContainer>;
};

export const MainContainer = styled.main`
    margin: 0px 200px 0;
    padding-top: 80px;

    @media ${devices.desktop} {
        margin: 0 20px;
    }

    @media ${devices.tablet} {
        margin: 0;
    }
`;
