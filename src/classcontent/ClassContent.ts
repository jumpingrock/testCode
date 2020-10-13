import {SchoolPersonnel} from "../SchoolPersonnel/SchoolPersonnel";
import {SUBJECT} from "../subject/subject";

export class ClassContent {
  teacher: SchoolPersonnel;
  student: Array<SchoolPersonnel>;
  subjectCode: SUBJECT;
  subjectName: string;
  classCode: string;
  className: string;
}