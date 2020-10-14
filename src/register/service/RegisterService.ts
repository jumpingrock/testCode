import {RequestHandler} from 'express';
import ErrorBase from '../../errors/ErrorBase';
import {ROLE, SchoolPersonnel} from '../../schoolpersonnel/SchoolPersonnel';
import {ClassContentService} from '../../classcontent/service/ClassContentService';
import {SUBJECT} from '../../subject/subject';
import {ClassIdentifier} from '../../classcontent/ClassContent';
import {ClassContentDBModel} from '../../classcontent/ClassContentDBModel';


function createSchoolPersonnel(reqObj: any) {
  const schoolPersonnels: Array<SchoolPersonnel> = [];
  for (let i = 0; i < reqObj.students.length; i++) {
    schoolPersonnels.push(new SchoolPersonnel(reqObj.students.name, reqObj.students.email, ROLE.STD))
  }
  return schoolPersonnels;
}

export const RegisterService: RequestHandler = async (req, res) => {
  const classContentService: ClassContentService = new ClassContentService();
  console.log(req.body);

  const reqObject = req.body;
  const schoolPersonals = createSchoolPersonnel(reqObject);
  const teacher: SchoolPersonnel = new SchoolPersonnel(reqObject.teacher.name, reqObject.teacher.email, ROLE.TEACH);
  const classId: ClassIdentifier = new ClassIdentifier(reqObject.classCode, reqObject.className);
  const subject: SUBJECT = reqObject.subjectCode;

  const createdClass: ClassContentDBModel = await classContentService.createClass(teacher, schoolPersonals, subject, classId);
  let newError: ErrorBase =  null;

  if(createdClass) {
    newError = new ErrorBase('Error processing registration', 500, 500)
  }


  return createdClass || res.sendStatus(newError.getHttpStatusCode());
}

