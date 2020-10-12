import chaiHttp from 'chai-http';
import chai from 'chai';
import App from "../app";
import {Application} from "express";

chai.use(chaiHttp)

describe('Health Check API',   () => {
  let appTest: Application;
  beforeEach(() => {
    appTest = App;

  })

  it('should return a OK when API is hit', async  () => {
    await expect(
      chai.request(appTest)
        .get('/api/healthcheck')
        .set('content-type', 'application/json')
    ).resolves.toMatchObject({
      status: 200,
      text: 'OK'
    });
  })
})