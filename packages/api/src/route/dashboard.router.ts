import { Request, Response, Router } from 'express';
import { HttpStatus, RoutePath } from './route.path';
import { DIProvider } from '../util/di.provider';

export const DashboardRouter = Router();

const { dashboardController } = DIProvider.getInstance();

DashboardRouter.get("/", async (req: Request, res: Response) => {
  const path = new RoutePath(req, res);
  const respBody = await dashboardController.getDashboardContents();

  path.respond({
    statusCode: HttpStatus.OK,
    body: respBody
  })
})


DashboardRouter.post("/:gestureId", async (req: Request, res: Response) => {
  const path = new RoutePath(req, res);
  const { gestureId } = req.params;

  const respBody = await dashboardController.setGestureCompleted(gestureId);

  path.respond({
    statusCode: HttpStatus.OK
  })
})