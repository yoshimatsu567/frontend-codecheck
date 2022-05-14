export interface PrefectureType {
    prefCode: number;
    prefName: string;
}

export interface PrefectureCheckBoxType extends PrefectureType {
    checked: boolean;
}

export type PopulationDataType = { year: number; value: number }[];

export type PrefecturePopulationType = {
    name: string;
    data: PopulationDataType;
};

export type ResasErrorType =
    | {
          name: string;
          message: string;
      }
    | undefined;
