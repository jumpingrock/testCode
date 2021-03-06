jest.mock('../../SchoolPersonnel/SchoolPersonnelDBModel', () => {
  return {
    SchoolPersonnelDBModel: {
      findOrCreate: jest.fn(),
    }
  }
})
jest.mock('../../classcontent/ClassContentDBModel', () => {
  return {
    ClassContentDBModel: {
      create: jest.fn(),
    }
  }
})
import App from '../../app';
import chai from 'chai'
import {Application} from 'express';
import chaiHttp from 'chai-http';
import {ROLE, SchoolPersonnel} from '../../schoolpersonnel/SchoolPersonnel';

let testApp: Application;
chai.use(chaiHttp);

describe('register controller integration test', () => {
  beforeEach(() => {
    testApp = App;
  })
  it('should return success code 204 when called with the correct request',  async () => {
    const requestBody = {
      teacher: {
        name: 'Teacher1',
        email: 'teacher1@gmail.com'
      },
      students: [
        {
          name: 'Student 1',
          email: 'student1@gmail.com'
        }, {
          name: 'Student 2',
          email: 'student2@gmail.com'
        }
      ],
      subject: {
        subjectCode: 'ENG',
        name: 'ENGLISH'
      },
      class: {
        classCode: 'P1-1',
        name: 'P1 Integrity'
      }
    }
    const personnel= new SchoolPersonnel('stud0', 'stud0@gmail.com', ROLE.STD);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const classContentMock = require('../../classcontent/ClassContentDBModel').ClassContentDBModel
    classContentMock.create.mockResolvedValueOnce([personnel, true])
    await expect(
      chai
        .request(testApp)
        .post('/api/register')
        .set('content-type', 'application/json')
        .send(requestBody)
    ).resolves.toMatchObject({
      status: 204
    })
  })

})