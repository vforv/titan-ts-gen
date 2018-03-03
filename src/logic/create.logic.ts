import {INewSwDataModel} from '../model/data/new-sw-data.model';

export function createLogic(model: INewSwDataModel): { result: INewSwDataModel } {
    return {
        result: model,
    };
}
