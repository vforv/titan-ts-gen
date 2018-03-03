import * as Fastify from 'fastify';
import { Container } from 'typedi';
import * as validator from '../validator';
import { ICRUD } from '../model/infrastructure/crud';
import {INewSwDataModel} from '../model/data/new-sw-data.model';

export interface IRouterInterface {

    registerRoutes(server: Fastify.FastifyInstance<{}, {}, {}>): void;

}

export class RouterRoute implements IRouterInterface {

    public registerRoutes(server: Fastify.FastifyInstance<{}, {}, {}>) {
        this.read(server);
        this.craete(server);
        this.update(server);
        this.delete(server);
    }

    private craete(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.post('/create', validator.NEW_SW_CREATE_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<INewSwDataModel>>('new-sw.logic');

            reply.send(logic.create(request.body));
        });
    }

    private read(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.get('/read/:from/:size', validator.NEW_SW_READ_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<INewSwDataModel>>('new-sw.logic');

            reply.send(logic.read(parseInt(request.params.from, 10), parseInt(request.params.size, 10)));
        });
    }

    private update(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.post('/update', validator.NEW_SW_UPDATE_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<INewSwDataModel>>('new-sw.logic');

            reply.send(logic.update(request.body));
        });
    }

    private delete(server: Fastify.FastifyInstance<{}, {}, {}>) {
        server.post('/delete/:id', validator.NEW_SW_ID_VALIDATOR, (request, reply) => {
            const logic = Container.get<ICRUD<INewSwDataModel>>('new-sw.logic');

            reply.send(logic.delete(request.params.id));
        });
    }
}
