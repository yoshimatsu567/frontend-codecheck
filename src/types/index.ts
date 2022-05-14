export interface PrefectureType {
    prefCode: number;
    prefName: string;
}

export interface PrefectureCheckBoxType extends PrefectureType {
    checked: boolean;
}

export type ResasErrorType =
    | {
          name: string;
          message: string;
      }
    | undefined;
