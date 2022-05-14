import React from 'react';

import styled from 'styled-components';

import { colors } from '@/styles/theme/colors';

const Loading: () => JSX.Element = () => {
    return (
        <LoadingContainer>
            <LoadingCircle />
        </LoadingContainer>
    );
};

export default Loading;

const LoadingContainer = styled.div`
    width: 100vw;
    height: calc(100vh * 2);
    background-color: ${colors.LoadingBackGroundColor};
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
`;

const LoadingCircle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 150px;
    border: 8px solid ${colors.WhiteColor};
    border-top-color: ${colors.LoadingBorderTopColor};
    box-sizing: border-box;
    position: fixed;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    animation: circle 1s linear infinite;
    -webkit-animation: circle 1s linear infinite;

    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes circle {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
`;
