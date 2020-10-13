import {SchoolPersonnel} from "../SchoolPersonnel/SchoolPersonnel";
import {SUBJECT} from "../subject/subject";

export class ClassContent {
  id: number;
  subjectCode: SUBJECT;
  subjectName: string;
  classCode: string;
  className: string;
  createdAt: Date;
  updatedAt: Date;
  teacher: SchoolPersonnel;
  student: Array<SchoolPersonnel>;
}