import { Request, Response, Router } from 'express';
import { HttpStatus, RoutePath } from './route.path';
import { DIProvider } from '../util/di.provider';

export const OnboardingRouter = Router();

const { onboardingController } = DIProvider.getInstance();

OnboardingRouter.post("/slack", async (req: Request, res: Response) => {
  const path = new RoutePath(req, res);
  const respBody = await onboardingController.triggerMessagePost();

  path.respond({
    statusCode: HttpStatus.OK,
  })
})