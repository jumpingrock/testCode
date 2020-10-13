import {SchoolPersonnel} from "../SchoolPersonnel";
import {SchoolPersonnelDBModel} from "../SchoolPersonnelDBModel";
import Logger from "../../config/logger";

export class SchoolPersonnelService {
  public async createPersonnel (personnel: SchoolPersonnel): Promise<SchoolPersonnel>{

    const personnelDBObject: any = {
      ...personnel
    }
    const foundOrCreated = await SchoolPersonnelDBModel
      .findOrCreate(personnelDBObject)

    if(!foundOrCreated) {
      const logger = new Logger('SchoolPersonnelService')
      logger.error('user not found or created')
    }
    const constructPersonnel: SchoolPersonnel = new SchoolPersonnel(foundOrCreated[0].name, foundOrCreated[0].email, foundOrCreated[0].role)
    return constructPersonnel
  }
}