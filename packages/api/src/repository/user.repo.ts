import { BaseRepository } from './base.repo';
import { MongoDbService } from '../service/MongoDbService';
import { UserDoc } from '../dao/user.dao';

export class UserRepository extends BaseRepository<UserDoc> {

  constructor(mongoAdapter: MongoDbService) {
    const collection = mongoAdapter.db.collection<UserDoc>('users');
    super(collection);
  }

  public async getDemoUser(): Promise<UserDoc> {
    return await this.get("62c8e989f91041b629fd3b2d");
  }
}