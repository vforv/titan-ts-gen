import {INewSwDataModel} from '../model/data/new-sw-data.model';

export function readOneLogic(modelId: string | number): { result: INewSwDataModel } {

    return {
        result: {
            example: `param: ${modelId}`,
        },
    };
}
