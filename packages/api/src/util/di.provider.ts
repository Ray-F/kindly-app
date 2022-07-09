import { UserRepository } from '../repository/user.repo';
import { MongoDbService } from '../service/MongoDbService';
import { Config } from './config';
import { DashboardController } from '../controller/dashboard.controller';
import { GestureRepository } from '../repository/gesture.repo';
import { ProfileController } from '../controller/profile.controller';
import { AchievementRepository } from '../repository/achievement.repo';
import { OnboardingController } from '../controller/onboarding.controller';
import { SlackService } from '../service/SlackService';

export class DIProvider {

  private static _instance: DIProvider = null;

  // Services
  private mongoAdapter: MongoDbService;
  private slackService: SlackService;

  // Repos
  public userRepo: UserRepository;
  public gestureRepo: GestureRepository;
  private achievementRepo: AchievementRepository;

  // Controllers
  public dashboardController: DashboardController;
  public profileController: ProfileController;
  public onboardingController: OnboardingController;


  private initServices() {
    this.mongoAdapter = MongoDbService.build(Config.MONGO_URI, "kindly-dev");
    this.slackService = new SlackService(Config.SLACK_SIGNING_SECRET, Config.SLACK_BOT_TOKEN, 9002);
  }

  private constructor() {
    this.initServices();
    this.initRepos();
    this.initControllers();
  }

  private initRepos() {
    this.userRepo = new UserRepository(this.mongoAdapter);
    this.gestureRepo = new GestureRepository(this.mongoAdapter);
    this.achievementRepo = new AchievementRepository();
  }

  private initControllers() {
    this.dashboardController = new DashboardController(this.userRepo, this.gestureRepo);
    this.profileController = new ProfileController(this.userRepo, this.gestureRepo, this.achievementRepo);
    this.onboardingController = new OnboardingController(this.slackService);
  }

  static getInstance(): DIProvider {
    if (!this._instance) {
      this._instance = new DIProvider();
    }

    return this._instance;
  }

}