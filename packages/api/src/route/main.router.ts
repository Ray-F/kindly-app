import { Router } from 'express';
import { DashboardRouter } from './dashboard.router';
import { ProfileRouter } from './profile.router';

export const MainRouter = Router();

MainRouter.use("/dashboard/:id", DashboardRouter);

MainRouter.use("/profile", ProfileRouter);