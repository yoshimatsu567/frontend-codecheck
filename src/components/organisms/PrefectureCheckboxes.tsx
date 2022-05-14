import React, { useCallback, useEffect } from 'react';

import usePrefectureList from '@/hooks/usePrefectureList';

import styled from 'styled-components';

import { devices } from '@/styles/theme/devices';

import { PrefectureType } from '@/types';

// components
import CheckboxCard from '@/components/molecules/CheckboxCard';

type Props = {
    prefectureList: PrefectureType[];
};

const PrefectureCheckBoxes: React.FC<Props> = ({ prefectureList }) => {
    const { setPrefectureList, setCheckedPrefecture } = usePrefectureList();

    useEffect(() => {
        setPrefectureList(prefectureList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 都道府県チェックボックスのハンドラー
    const useOnChangeHandler = useCallback(
        (prefCode: number, prefName: string, checked: boolean) => {
            setCheckedPrefecture({ prefCode, prefName, checked });
        },
        [setCheckedPrefecture]
    );

    return (
        <PrefectureCheckBoxContainer>
            {prefectureList.map((item) => (
                <React.Fragment key={item.prefCode}>
                    <CheckboxCard
                        props={{
                            key: item.prefCode,
                            title: item.prefName,
                        }}
                        onChange={useOnChangeHandler}
                    />
                </React.Fragment>
            ))}
        </PrefectureCheckBoxContainer>
    );
};

PrefectureCheckBoxes.displayName = 'PrefectureCheckBoxes';

export default PrefectureCheckBoxes;

const PrefectureCheckBoxContainer = styled.div`
    @media ${devices.tablet} {
        text-align: center;
    }
`;
