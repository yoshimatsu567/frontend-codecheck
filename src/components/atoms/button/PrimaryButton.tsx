import React from 'react';

import styled from 'styled-components';

import { colors } from '@/styles/theme/colors';

type ButtonProps = JSX.IntrinsicElements['button'];
type Props = ButtonProps & { title: string };

const PrimaryButton: React.FC<Props> = (props) => {
    return (
        <PrimaryButtonStyle onClick={props.onClick}>
            {props.title}
        </PrimaryButtonStyle>
    );
};

const PrimaryButtonStyle = styled.button`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    cursor: pointer;
    background-color: ${colors.PrimaryColor};
    color: ${colors.WhiteColor};
    padding: 10px;
    border-radius: 10px;

    &:hover {
        background-color: ${colors.HoveringPrimaryColor};
        color: ${colors.HoveringWhiteColor};
    }
`;

export default PrimaryButton;
