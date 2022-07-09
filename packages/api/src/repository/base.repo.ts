import { Collection, ObjectId, OptionalUnlessRequiredId } from 'mongodb';

export class BaseRepository<T> {

  collection: Collection<T>;

  constructor(collection: Collection<T>) {
    this.collection = collection;
  }

  async create(item: T & { _id: undefined | ObjectId }): Promise<T> {
    if (!item._id) {
      item._id = new ObjectId();
    }

    await this.collection.insertOne(item as OptionalUnlessRequiredId<T>);

    return item;
  }

  async get(id: string): Promise<T> {
    const query = {
      _id: new ObjectId(id)
    }

    // @ts-ignore
    return await this.collection.findOne(query);
  }

  async update(doc: T & { _id: ObjectId }): Promise<T> {
    const query = {
      _id: doc._id,
    }

    // @ts-ignore
    return await this.collection.updateOne(query, {
      $set: doc
    });
  }

  async list(): Promise<T[]> {

    // @ts-ignore
    return await this.collection.find({}).toArray();
  }

  async clear() {
    await this.collection.deleteMany({});
  }

}