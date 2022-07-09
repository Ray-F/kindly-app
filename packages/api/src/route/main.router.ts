import { Router } from 'express';
import { DashboardRouter } from './dashboard.router';
import { ProfileRouter } from './profile.router';
import { OnboardingRouter } from './onboarding.router';

export const MainRouter = Router();

MainRouter.use("/dashboard/:id", DashboardRouter);

MainRouter.use("/profile", ProfileRouter);

MainRouter.use("/onboarding", OnboardingRouter);