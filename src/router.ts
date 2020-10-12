import Express from 'express';
import HealthcheckController from './healthcheck/HealthcheckController';
import RegisterController from "./register/controller/RegisterController";

const router = Express.Router();

router.use('/', HealthcheckController);
router.use('/', RegisterController);

export default router;
