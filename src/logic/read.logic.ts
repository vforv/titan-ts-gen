import {INewSwDataModel} from '../model/data/new-sw-data.model';

export function readLogic(from: number, size: number): { result: INewSwDataModel[] } {

    return {
        result: [{
            example: `from: ${from} size: ${size}`,
        }],
    };
}
