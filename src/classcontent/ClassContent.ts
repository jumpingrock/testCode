import {SchoolPersonnel} from '../schoolpersonnel/SchoolPersonnel';
import {SUBJECT} from '../subject/subject';

export class ClassIdentifier {
  classCode: string;
  className: string;
  constructor(classCode: string, className: string){
    this.className = className
    this.classCode = classCode
  }

}

export class ClassContent {
  id: number;
  subjectCode: SUBJECT;
  subjectName: string;
  classCode: string;
  className: string;
  createdAt: Date;
  updatedAt: Date;
  student: Array<SchoolPersonnel>;
}