import {INewSwDataModel} from '../model/data/new-sw-data.model';

export function deleteLogic(modelId: string | number): { result: INewSwDataModel } {

    return {
        result: {
            example: `param: ${modelId}`,
        },
    };
}
