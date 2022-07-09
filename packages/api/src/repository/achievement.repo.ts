import { BaseRepository } from './base.repo';
import { AchievementDoc } from '../dao/achievement.dao';
import { ObjectId } from 'mongodb';

export class AchievementRepository extends BaseRepository<AchievementDoc> {

  constructor() {
    super(undefined);
  }

  /**
   * Mock data for achievements.
   */
  override async list(): Promise<AchievementDoc[]> {
    return [
      {
        name: "1st gesture completed",
        _id: new ObjectId()
      },
      {
        name: "Leaderboard achievement",
        _id: new ObjectId()
      },
      {
        name: "Frequent gesturer",
        _id: new ObjectId()
      },
      {
        name: "Kindly superstar",
        _id: new ObjectId()
      },
      {
        name: "Gesture 7 day streak",
        _id: new ObjectId()
      }
    ];
  }

}