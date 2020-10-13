
jest.mock('../SchoolPersonnelDBModel', () => {
  return {
    SchoolPersonnelDBModel: {
      findOrCreate: jest.fn(),
    }
  }
})

/* eslint-disable @typescript-eslint/no-var-requires */
import {SchoolPersonnelService} from "./SchoolPersonnelService";
import {ROLE, SchoolPersonnel} from "../SchoolPersonnel";

describe('school personnel service', () => {
  let schoolPersonnelService: SchoolPersonnelService = null;
  let personnel: SchoolPersonnel;

  beforeEach(() => {
    schoolPersonnelService = new SchoolPersonnelService();
    personnel= new SchoolPersonnel(`stud0`, `stud0@gmail.com`, ROLE.STD);

  })
  it('should return a found or created user', async () => {

    const schoolPersonnelMock = require('../SchoolPersonnelDBModel').SchoolPersonnelDBModel
    schoolPersonnelMock.findOrCreate.mockResolvedValueOnce([personnel, true])

    await expect(schoolPersonnelService.createPersonnel(personnel))
      .resolves.toBeInstanceOf(SchoolPersonnel)

  })

  
})