import { Service } from 'typedi';
import { ICRUD } from '../model/infrastructure/crud';
import {INewSwDataModel} from '../model/data/new-sw-data.model';
import { createLogic } from './create.logic';
import { updateLogic } from './update.logic';
import { deleteLogic } from './delete.logic';
import { readLogic } from './read.logic';
import { readOneLogic } from './read-one.logic';

@Service('new-sw.logic')
export class NewSwLogic implements ICRUD<INewSwDataModel> {

    public create(model: INewSwDataModel): { result: INewSwDataModel } {

        return createLogic(model);
    }

    public read(from: number, size: number): { result: INewSwDataModel[] } {

        return readLogic(from, size);
    }

    public update(model: INewSwDataModel): { result: INewSwDataModel } {

        return updateLogic(model);
    }

    public delete(modelId: string | number): { result: INewSwDataModel } {

        return deleteLogic(modelId);
    }

    public readOne(modelId: string | number): { result: INewSwDataModel } {

        return readOneLogic(modelId);
    }
}
