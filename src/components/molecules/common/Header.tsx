import React from 'react';

import styled from 'styled-components';

import { colors } from '@/styles/theme/colors';
import { fontSizes } from '@/styles/theme/fontSizes';
import { devices } from '@/styles/theme/devices';

// components
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Link href={'/'} passHref>
                <HeaderTitle>県別の総人口推移表示するアプリ</HeaderTitle>
            </Link>
        </HeaderContainer>
    );
};

export const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background-color: ${colors.WhiteColor};
    border-bottom: 1px solid ${colors.BorderColor};
`;
export const HeaderTitle = styled.h1`
    font-size: ${fontSizes.HeaderTitleSize_PC};
    font-weight: bold;
    cursor: pointer;
    color: ${colors.BlackColor};

    @media ${devices.tablet} {
        font-size: ${fontSizes.HeaderTitleSize_Tablet};
        font-weight: bold;
        cursor: pointer;
    }

    &:hover {
        color: ${colors.HoveringBlackColor};
    }
`;
