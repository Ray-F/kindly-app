import { Controller } from './base.controller';
import { UserRepository } from '../repository/user.repo';
import { GestureRepository } from '../repository/gesture.repo';
import { ObjectId } from 'mongodb';


export interface DashboardDto {
  profileDetails: {
    name: string,
    animatedProfileUrl: string,
  },

  // List of 3 gestures
  gestures: {
    id: string,
    iconUrl: string,
    name: string,
    points: number,
    isCompleted: boolean
  }[],

  leaderboard: {
    iconUrl: string,
    name: string,
    position: number,
    totalPoints: number
  }[],

  resetsCountdownDays: number
}

export class DashboardController extends Controller {
  private userRepo: UserRepository;
  private gestureRepo: GestureRepository;

  constructor(userRepo: UserRepository, gestureRepo: GestureRepository) {
    super();

    this.userRepo = userRepo;
    this.gestureRepo = gestureRepo;
  }

  async setGestureCompleted(gestureId: string) {
    const gesture = await this.gestureRepo.get(gestureId);
    const user = await this.userRepo.getDemoUser();

    const gestureCompletedSet = new Set(user.gesturesCompleted.map((it) => it.toString()));
    if (!gestureCompletedSet.has(gestureId)) {
      user.gesturesCompleted.push(new ObjectId(gesture._id));
      await this.userRepo.update(user);
    }
  }

  async getDashboardContents(): Promise<DashboardDto> {
    const todaysGestures = await Promise.all([
      await this.gestureRepo.get('62c8fd7dd9a7d1460336f020'),
      await this.gestureRepo.get('62c8fe2dded591ddaeecc3b6'),
      await this.gestureRepo.get('62c8fe28a25393d1363e28df'),
    ]);

    const demoUser = await this.userRepo.getDemoUser();

    const gesturesCompletedSet = new Set(demoUser.gesturesCompleted.map((it) => it.toString()));

    const gesturesMap = await this.gestureRepo.map();

    const topUsers = (await this.userRepo.list())
        .map((it) => ({
          iconUrl: it.profileUrl,
          position: 0,
          // TODO: change this to actually match gestures completed
          totalPoints: it.gesturesCompleted.reduce((sum, it) => sum + gesturesMap[it.toString()].points, 0),
          name: it.name,
        }))
        .sort((a, b) => a.totalPoints > b.totalPoints ? -1 : 1)
        .map((it, idx) => ({ ...it, position: idx + 1 }))
        .splice(0, 3);

    return {
      profileDetails: {
        name: demoUser.name,
        animatedProfileUrl: demoUser.profileAnimatedUrl,
      },
      leaderboard: topUsers,
      resetsCountdownDays: 4,
      gestures: todaysGestures.map((it) => ({
        id: it._id.toString(),
        iconUrl: it.iconUrl,
        name: it.title,
        points: it.points,
        isCompleted: gesturesCompletedSet.has(it._id.toString()),
      })),
    };
  }
}