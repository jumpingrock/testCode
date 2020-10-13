import Express, { RequestHandler } from 'express';
import { RegisterService } from '../service/RegisterService'
const RegisterController = Express.Router();

RegisterController.post('/register', RegisterService);

export default RegisterController;
