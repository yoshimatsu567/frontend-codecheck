import React from 'react';

import styled from 'styled-components';

import { colors } from '@/styles/theme/colors';
import { devices } from '@/styles/theme/devices';
import { fontSizes } from '@/styles/theme/fontSizes';

type CheckboxProps = {
    props: {
        key: number;
        title: string;
        onChange: (key: number, title: string, checked: boolean) => void;
    };
};

const Checkbox: React.FC<CheckboxProps> = ({ props }) => {
    return (
        <CheckBoxLabel htmlFor={props.title}>
            <CheckBox
                type='checkbox'
                onChange={(e) =>
                    props.onChange(props.key, props.title, e.target.checked)
                }
                id={props.title}
            />
            {props.title}
        </CheckBoxLabel>
    );
};

export default Checkbox;

const CheckBoxLabel = styled.label`
    width: 100px;
    cursor: pointer;
    margin: 0 5px 5px 0;
    padding: 6px 10px;
    border: 1px solid ${colors.BorderColor};
    border-radius: 5px;

    @media ${devices.tablet} {
        width: 60px;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        margin: 0 2px 2px 0;
        padding: 5px;
        font-size: ${fontSizes.CheckBoxLabelSize_Tablet};
    }

    &:hover {
        background-color: ${colors.HoveringWhiteColor};
    }
`;
const CheckBox = styled.input`
    cursor: pointer;
    accent-color: ${colors.PrimaryColor};
`;
