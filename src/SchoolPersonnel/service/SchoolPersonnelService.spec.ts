import {SchoolPersonnelService} from "./SchoolPersonnelService";
import {ROLE, SchoolPersonnel} from "../SchoolPersonnel";

describe('school personnel service', () => {
  let schoolPersonnelService: SchoolPersonnelService = null;
  beforeEach(() => {
    schoolPersonnelService = new SchoolPersonnelService();
  })
  it('should return a list of created user', async () => {
    const listOfPersonnel: Array<SchoolPersonnel> = [];
    for(let i=0; i<3; i++) {
      listOfPersonnel.push(new SchoolPersonnel(`stud${i}`, `stud${i}@gmail.com`, ROLE.STD))
    }

    await expect(schoolPersonnelService.createPersonnel(listOfPersonnel)).resolves.toMatchObject(listOfPersonnel)
  })
})