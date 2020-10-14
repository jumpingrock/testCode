import {ROLE, SchoolPersonnel} from "../SchoolPersonnel";

jest.mock('../SchoolPersonnelDBModel', () => {
  return {
    SchoolPersonnelDBModel: {
      findOrCreate: jest.fn(),
    }
  }
})

/* eslint-disable @typescript-eslint/no-var-requires */
import {SchoolPersonnelService} from './SchoolPersonnelService';

describe('school personnel service', () => {
  let schoolPersonnelService: SchoolPersonnelService = null;
  let personnel: SchoolPersonnel;

  beforeEach(() => {
    schoolPersonnelService = new SchoolPersonnelService();
    personnel= new SchoolPersonnel('stud0', 'stud0@gmail.com', ROLE.STD);

  })
  it('should return a found or created user', async () => {

    const schoolPersonnelMock = require('../SchoolPersonnelDBModel').SchoolPersonnelDBModel
    schoolPersonnelMock.findOrCreate.mockResolvedValueOnce([personnel, true])

    await expect(schoolPersonnelService.createOrFindPersonnel(personnel))
      .resolves.toBeInstanceOf(SchoolPersonnel)

  })

  it('should return an error if no personnel was created or found', async () => {
    const schoolPersonnelMock = require('../SchoolPersonnelDBModel').SchoolPersonnelDBModel
    schoolPersonnelMock.findOrCreate.mockRejectedValueOnce(new Error('test error'))

    await expect(schoolPersonnelService.createOrFindPersonnel(personnel))
      .rejects.toThrowError(Error)
  })
})