import {RequestHandler} from 'express';
import ErrorBase from '../../errors/ErrorBase';


export const RegisterService: RequestHandler = async (req, res) => {
  console.log(req.body);
  const newError = new ErrorBase('Error processing registration', 500, 500)
  return res.sendStatus(newError.getHttpStatusCode());
}
