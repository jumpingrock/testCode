import {ClassContentDBModel} from '../ClassContentDBModel';
import {SchoolPersonnelDBModel} from '../../schoolpersonnel/SchoolPersonnelDBModel';
import {SUBJECT} from '../../subject/subject';
import {SchoolPersonnel} from '../../schoolpersonnel/SchoolPersonnel';
import {ClassIdentifier} from 'classcontent';

export class ClassContentService {
  public createClass = async (
    teacher: SchoolPersonnel,
    students: Array<SchoolPersonnel>,
    subject: SUBJECT,
    classId: ClassIdentifier): Promise<ClassContentDBModel> => {

    const classDBModelObj = {
      subjectCode: 'ENG',
      subjectName: subject,
      classCode: classId.classCode,
      className: classId.className,
      teacher,
      students

    };
    const createOption = {
      include: [{models: SchoolPersonnelDBModel}]
    }
    const classContentDBModel = await ClassContentDBModel.create(classDBModelObj, createOption)

    return classContentDBModel
  }
}