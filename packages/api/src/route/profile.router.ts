import { Request, Response, Router } from 'express';
import { HttpStatus, RoutePath } from './route.path';
import { DIProvider } from '../util/di.provider';

export const ProfileRouter = Router();

const { profileController } = DIProvider.getInstance();

ProfileRouter.get("/", async (req: Request, res: Response) => {
  const path = new RoutePath(req, res);
  const respBody = await profileController.getProfileContents();

  path.respond({
    statusCode: HttpStatus.OK,
    body: respBody
  })
})