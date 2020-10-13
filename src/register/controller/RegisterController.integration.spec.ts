import App from "../../app";
import chai from 'chai'
import {Application} from "express";
import {SUBJECT} from "../../subject/subject";
import chaiHttp from "chai-http";

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
        subjectCode: SUBJECT.ENG,
        name: (SUBJECT.ENG).valueOf()
      },
      class: {
        classCode: 'P1-1',
        name: 'P1 Integrity'
      }
    }
    // const requestBody = {tiger: 'rawwwww'}
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