

jest.mock('../ClassContentDBModel', () => {
  return {
    ClassContentDBModel: {
      create: jest.fn()
    }
  }
})
import {ClassContentService} from './ClassContentService';
import {ROLE, SchoolPersonnel} from '../../schoolpersonnel/SchoolPersonnel';
import {SUBJECT} from '../../subject/subject';
import {ClassIdentifier} from 'classcontent';


describe('class content service', () => {
  let classContentService: ClassContentService;
  beforeEach(() => {
    classContentService = new ClassContentService();
  })

  it('should return a ClassContentDBModel when insert is successful', async () => {
    const teacher = new SchoolPersonnel(
      'teacher',
      'teach@gmail.com',
      ROLE.TEACH)
    const student: SchoolPersonnel = new SchoolPersonnel('stu', 'stu@gmail.com', ROLE.STD)
    const classId: ClassIdentifier = new ClassIdentifier('C-A1', 'class A1')
    const now = Date.now();
    const testClassContentDBModelCreate = {
      id: 1,
      subjectCode: SUBJECT.ENG,
      subjectName: SUBJECT.ENG.valueOf(),
      classCode: classId.classCode,
      className: classId.className,
      createdAt: now,
      updatedAt: now,
      teacherId: 1,
      teacher: teacher,
      students: [student]
    }
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ClassContentDBModelMock = require('../ClassContentDBModel').ClassContentDBModel
    ClassContentDBModelMock.create.mockResolvedValueOnce(testClassContentDBModelCreate)

    await expect(classContentService.createClass(
      teacher,
      [student],
      SUBJECT.ENG,
      classId)).resolves.toMatchObject(testClassContentDBModelCreate)
  })
  // it('should return an error when something goes wrong', async () => {
  //
  // })
})