import { ObjectId } from 'mongodb';

export interface AchievementDoc {
  _id: ObjectId | undefined,
  name: string,
}