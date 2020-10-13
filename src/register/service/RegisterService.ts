import {RequestHandler} from 'express';
import ErrorBase from '../../errors/ErrorBase';
import {ROLE, SchoolPersonnel} from "../../SchoolPersonnel/SchoolPersonnel";


export const RegisterService: RequestHandler = async (req, res) => {
  console.log(req.body);
  const reqObj = req.body;
  const teacher: SchoolPersonnel = new SchoolPersonnel(reqObj.teacher.name, reqObj.teacher.email, ROLE.TEACH);
  // eslint-disable-next-line prefer-const
  let students: Array<SchoolPersonnel> = [];
  for (let i=0; i<reqObj.students.length; i++) {
    students.push(new SchoolPersonnel(reqObj.students.name, reqObj.students.email, ROLE.STD))
  }
  // await sequelize.transaction(async (transaction) => {
  //
  // })
  const newError = new ErrorBase('Error processing registration', 500, 500)
  return res.sendStatus(newError.getHttpStatusCode());
}

