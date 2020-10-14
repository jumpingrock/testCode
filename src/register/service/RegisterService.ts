import {RequestHandler} from 'express';
import ErrorBase from '../../errors/ErrorBase';
import {ROLE, SchoolPersonnel} from "../../SchoolPersonnel/SchoolPersonnel";
import {SchoolPersonnelService} from "../../SchoolPersonnel/service/SchoolPersonnelService";
import sequelize from "../../config/database";


function createSchoolPersonnel(reqObj: any) {
  const schoolPersonnels: Array<SchoolPersonnel> = [];
  for (let i = 0; i < reqObj.students.length; i++) {
    schoolPersonnels.push(new SchoolPersonnel(reqObj.students.name, reqObj.students.email, ROLE.STD))
  }
  return schoolPersonnels;
}

export const RegisterService: RequestHandler = async (req, res) => {
  const schoolPersonnelService: SchoolPersonnelService = new SchoolPersonnelService();
  console.log(req.body);

  const reqObject = req.body;
  const schoolPersonnels = createSchoolPersonnel(reqObject);
  const teacher: SchoolPersonnel = new SchoolPersonnel(reqObject.teacher.name, reqObject.teacher.email, ROLE.TEACH);

  await sequelize.transaction(async (transaction) => {
    for(let i=0; i<schoolPersonnels.length; i++) {
      await schoolPersonnelService.createOrFindPersonnel(schoolPersonnels[i]);
    }


  })
  const newError = new ErrorBase('Error processing registration', 500, 500)
  return res.sendStatus(newError.getHttpStatusCode());
}

