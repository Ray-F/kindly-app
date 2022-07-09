import { BaseRepository } from './base.repo';
import { GestureDoc } from '../dao/gesture.dao';
import { MongoDbService } from '../service/MongoDbService';
import { IHash } from '../util/interface.hash';

export class GestureRepository extends BaseRepository<GestureDoc> {
  constructor(mongoAdapter: MongoDbService) {
    const collection = mongoAdapter.db.collection<GestureDoc>("gestures");
    super(collection);
  }

  async map(): Promise<IHash<GestureDoc>> {
    return (await this.list()).reduce((map, obj) => {
      map[obj._id.toString()] = obj;
      return map;
    }, {});
  }

  async

}