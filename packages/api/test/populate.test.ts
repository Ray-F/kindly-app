import { DIProvider } from '../src/util/di.provider';
import { UserDoc } from '../src/dao/user.dao';
import { GestureDoc } from '../src/dao/gesture.dao';
import { ObjectId } from 'mongodb';
import { SlackService } from '../src/service/SlackService';
import { Config } from '../src/util/config';

const { userRepo, gestureRepo } = DIProvider.getInstance();

const resetDb = async () => {
  await userRepo.clear();
  await gestureRepo.clear();
};

const addDummyUsers = async () => {

  const users: UserDoc[] = [
    {
      _id: new ObjectId('62c8e989f91041b629fd3b2d'),
      name: 'Harshal Damania',
      externalId: '',
      role: 'Happiness Architect',
      profileUrl: 'http://localhost:9000/static/harshal_damania_profile.png',
      profileAnimatedUrl: 'http://localhost:9000/static/harshal_animated.gif',
      achievements: [],
      gesturesCompleted: [
        new ObjectId('62c90df3dce469dc34e881f6'),
        new ObjectId('62c909ed5ef66b73534e9b03'),
        new ObjectId('62c909e8a8e3709d054b7c9e'),
      ],
    },
    {
      _id: new ObjectId('62c8ff5cb5651cd461e3ac33'),
      name: 'Devan James',
      externalId: '',
      role: 'Chief People Officer',
      profileUrl: 'http://localhost:9000/static/devon_james_profile.png',
      profileAnimatedUrl: '',
      achievements: [],
      gesturesCompleted: [
        new ObjectId('62c90e237be07fbf914760f2'),
      ],
    },
    {
      _id: new ObjectId('62c8ffda703da99821de631d'),
      name: 'Shena Nomes',
      externalId: '',
      role: 'Solutions Engineer',
      profileAnimatedUrl: '',
      profileUrl: 'http://localhost:9000/static/shena_nomes_profile.png',
      achievements: [],
      gesturesCompleted: [
        new ObjectId('62c8fd95b59d7c0b9ce42206'),
      ],
    },
  ];

  await Promise.all(users.map((it) => userRepo.create(it)));
};

const addDummyGestures = async () => {
  const gestures: GestureDoc[] = [
    {
      _id: new ObjectId('62c8fd7dd9a7d1460336f020'),
      title: 'Buy someone a coffee',
      iconUrl: 'http://localhost:9000/static/coffee_icon.png',
      points: 100,
    },
    {
      _id: new ObjectId('62c8fe28a25393d1363e28df'),
      title: 'BARK!',
      iconUrl: 'http://localhost:9000/static/bark_icon.png',
      points: 500,
    },
    {
      _id: new ObjectId('62c8fe2dded591ddaeecc3b6'),
      title: 'High five 3 people',
      iconUrl: 'http://localhost:9000/static/high_five_icon.png',
      points: 125,
    },
    {
      _id: new ObjectId('62c8fd95b59d7c0b9ce42206'),
      title: 'For Shena',
      iconUrl: 'http://localhost:9000/static/high_five_icon.png',
      points: 400,
    },
    {
      _id: new ObjectId('62c909e8a8e3709d054b7c9e'),
      title: 'Complement someone\'s socks',
      iconUrl: 'http://localhost:9000/static/compliment_socks.png',
      points: 230,
    },
    {
      _id: new ObjectId('62c909ed5ef66b73534e9b03'),
      title: 'Help a stranger out',
      iconUrl: 'http://localhost:9000/static/help_stranger.png',
      points: 100,
    },
    {
      _id: new ObjectId('62c90df3dce469dc34e881f6'),
      title: 'Some other idea',
      iconUrl: 'http://localhost:9000/static/high_five_icon.png',
      points: 20,
    },
    {
      _id: new ObjectId('62c90e237be07fbf914760f2'),
      title: 'For Devan',
      iconUrl: 'http://localhost:9000/static/high_five_icon.png',
      points: 1170,
    },
  ];

  // Parallel creation
  await Promise.all(gestures.map((it) => gestureRepo.create(it)));
};

it('should populate the database with dummy data', async function () {
  this.timeout(20_000);
  await resetDb();

  await Promise.all([
    addDummyGestures(),
    addDummyUsers(),
  ]);
});


it('Test send message', async function () {
  this.timeout(20_000);

  const slackService = new SlackService(Config.SLACK_SIGNING_SECRET, Config.SLACK_BOT_TOKEN, 9002);
  await slackService.sendMessageToGeneral();
})
