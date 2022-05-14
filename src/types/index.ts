export interface PrefectureType {
    prefCode: number;
    prefName: string;
}

export interface PrefectureCheckBoxType extends PrefectureType {
    checked: boolean;
}

export type PrefecturePopulationType = {
    name: string;
    data: { year: number; value: number }[];
};

export type ResasErrorType =
    | {
          name: string;
          message: string;
      }
    | undefined;
