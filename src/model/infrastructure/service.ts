import { INewSwDataModel } from '../data/new-sw-data.model';

export interface INewSwRepository {
    serviceMethod(id: string): { result: INewSwDataModel };
}
