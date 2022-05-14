import React from 'react';
import { FallbackProps } from 'react-error-boundary';

import styled from 'styled-components';
import { colors } from '../styles/theme/colors';

// components
import PrimaryButton from '@/components/atoms/button/PrimaryButton';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <ErrorFallbackContainer role='alert'>
            <ErrorFallbackInnerContainer>
                <ErrorFallbackInnerTitleWrapper>
                    <ErrorStatusCodeText>
                        {error ? error.name : undefined}
                    </ErrorStatusCodeText>
                    <p>{error ? error.message : undefined}</p>
                </ErrorFallbackInnerTitleWrapper>
                <ErrorApologizeText>
                    エラーが発生しました。時間を置いて再度お試しください。
                </ErrorApologizeText>
                <PrimaryButton
                    title='再読み込み'
                    onClick={resetErrorBoundary}
                />
            </ErrorFallbackInnerContainer>
        </ErrorFallbackContainer>
    );
};

const ErrorFallbackContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorFallbackInnerContainer = styled.div`
    size: 24px;
    font-weight: 600;
    border: 1px solid ${colors.BorderColor};
    padding: 20px;
    border-radius: 5px;
`;

const ErrorFallbackInnerTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ErrorStatusCodeText = styled.p`
    margin-right: 10px;
`;

const ErrorApologizeText = styled.pre`
    margin-bottom: 30px;
`;

export default ErrorFallback;
