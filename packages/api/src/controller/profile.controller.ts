import { Controller } from './base.controller';
import { UserRepository } from '../repository/user.repo';
import { GestureRepository } from '../repository/gesture.repo';
import { AchievementRepository } from '../repository/achievement.repo';

export interface ProfileDto {
  profileDetails: {
    name: string,
    role: string,
    organisation: string,
    animatedUrl: string,
    totalPoints: number,
    lastAddition: number
  },

  completedGestures: {
    iconUrl: string,
    title: string
  }[],

  achievements: {
    achievementTitle: string
  }[]

}

export class ProfileController extends Controller {

  private userRepo: UserRepository;
  private gestureRepo: GestureRepository;
  private achievementRepo: AchievementRepository;

  constructor(userRepo: UserRepository, taskRepo: GestureRepository, achievementRepo: AchievementRepository) {
    super();

    this.userRepo = userRepo;
    this.gestureRepo = taskRepo;

    this.achievementRepo = achievementRepo;
  }

  async getProfileContents(): Promise<ProfileDto> {
    const demoUser = await this.userRepo.getDemoUser();
    const gestures = await this.gestureRepo.map();
    const achievements = await this.achievementRepo.list();

    const lastAddition = gestures[demoUser.gesturesCompleted.at(-1).toString()].points
    const totalPoints = demoUser.gesturesCompleted.reduce((sum, it) => sum + gestures[it.toString()].points, 0)

    return {
      profileDetails: {
        organisation: "Gourmet Glizzys",
        name: demoUser.name,
        role: demoUser.role,
        animatedUrl: demoUser.profileAnimatedUrl,
        lastAddition: lastAddition,
        totalPoints: totalPoints,
      },
      completedGestures: demoUser.gesturesCompleted.map((it) => {
        const gesture = gestures[it.toString()];
        return {
          iconUrl: gesture.iconUrl,
          title: gesture.title,
        }
      }),
      achievements: achievements.map((it) => ({
        achievementTitle: it.name
      }))
    }
  }
}