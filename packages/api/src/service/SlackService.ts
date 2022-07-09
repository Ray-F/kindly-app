import { App } from '@slack/bolt';

export class SlackService {

  private slackApp: App;
  private readonly token: string;

  constructor(slackSigningSecret: string, slackBotToken: string, port: number) {
    const app = new App({
      signingSecret: slackSigningSecret,
      token: slackBotToken,
    })

    this.token = slackBotToken;

    this.slackApp = app;

    app.start(port).then(() => {
      console.info("[INIT] Slack bot running")
    })
  }

  async sendMessageToGeneral() {
    await this.slackApp.client.chat.postMessage({
      token: this.token,
      channel: "C03NWEV4V5G",
      text: `*Your daily gestures are ready!*

View the <http://localhost:3000/dashboard|kindly dashboard> to find your gestures for the day.
As always, stay happy! 🤗
      `,
      mrkdwn: true
    })
  }
}