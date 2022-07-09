import { Document, ObjectId } from 'mongodb';

export interface GestureDoc extends Document {
  _id: ObjectId,
  title: string,
  iconUrl: string,
  points: number
}