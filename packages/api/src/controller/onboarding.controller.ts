import { Controller } from './base.controller';
import { SlackService } from '../service/SlackService';

export class OnboardingController extends Controller {

  private slackService: SlackService;

  constructor(slackService: SlackService) {
    super();

    this.slackService = slackService;
  }

  async triggerMessagePost() {
    await this.slackService.sendMessageToGeneral();
  }

}