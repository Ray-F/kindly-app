import { Db, MongoClient } from 'mongodb';

/**
 * A singleton adapter that allows access to MongoDB cluster through a unique mongo uri.
 */
class MongoDbService {
  /**
   * The database instance.
   */
  public db: Db;

  /**
   * Private MongoClient for purposes of getting another database from the same adapter instance.
   */
  private client: MongoClient;

  private static _instance: MongoDbService;

  private constructor(uri: string, dbName: string) {
    const client = new MongoClient(uri);
    this.db = client.db(dbName);

    client.connect((err) => {
      console.log("[INIT] MongoDB connected")
      if (err) throw err;
    });

    this.client = client;
  }

  public getDb(dbName: string): Db {
    return this.client.db(dbName);
  }

  /**
   * Builds a MongoAdapter using a `uri` and default `dbName`.
   */
  public static build(uri: string, dbName: string): MongoDbService {
    if (this._instance) throw new Error('Already built');

    this._instance = new this(uri, dbName);
    return this._instance;
  }

  /**
   * Get the current `MongoAdapter` instance if it exists, or
   */
  public static getInstance(): MongoDbService {
    if (!this._instance) throw new Error('No instance of MongoAdapter exists!');
    return this._instance;
  }
}

export { MongoDbService };
