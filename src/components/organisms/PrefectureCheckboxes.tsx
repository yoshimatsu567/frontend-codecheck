import React, { memo, useCallback } from 'react';

import usePrefectureList from '@/hooks/usePrefectureList';

import styled from 'styled-components';

import { devices } from '@/styles/theme/devices';

import CheckboxCard from '@/components/molecules/CheckboxCard';

const PrefectureCheckBoxes: React.MemoExoticComponent<() => JSX.Element> = memo(
    () => {
        const { prefectureList, setCheckedPrefecture } = usePrefectureList();

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
    }
);

PrefectureCheckBoxes.displayName = 'PrefectureCheckBoxes';

export default PrefectureCheckBoxes;

const PrefectureCheckBoxContainer = styled.div`
    @media ${devices.tablet} {
        text-align: center;
    }
`;
