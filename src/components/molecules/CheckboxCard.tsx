import React from 'react';

import styled from 'styled-components';
import Checkbox from '../atoms/input/Checkbox';

type CheckboxCardProps = {
    props: { key: number; title: string };
    onChange: (key: number, title: string, checked: boolean) => void;
};

const CheckboxCard: React.FC<CheckboxCardProps> = ({ props, onChange }) => {
    return (
        <PrefectureCheckBoxWrapper>
            <Checkbox props={props} onChange={onChange} />
        </PrefectureCheckBoxWrapper>
    );
};

export default CheckboxCard;

const PrefectureCheckBoxWrapper = styled.span`
    margin-right: 10px;
    display: inline-flex;
    cursor: pointer;
`;
