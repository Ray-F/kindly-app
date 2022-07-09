import { Document, ObjectId } from 'mongodb';


export interface UserDoc extends Document {
  _id: ObjectId | undefined,
  name: string,
  profileUrl: string,
  profileAnimatedUrl: string,
  externalId: string,
  role: string,

  gesturesCompleted: ObjectId[],

  achievements: ObjectId[]
}