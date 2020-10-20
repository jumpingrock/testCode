import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {SchoolPersonnelDBModel} from "../schoolpersonnel/SchoolPersonnelDBModel";
import {ClassContentDBModel} from "../classcontent/ClassContentDBModel";

@Table({tableName: 'nominal_roll'})

export class NominalRollDBModel extends Model<NominalRollDBModel> {
  @ForeignKey(() => SchoolPersonnelDBModel)
  @Column({type: DataType.INTEGER})
  personnelId: number;

  @ForeignKey(() => ClassContentDBModel)
  @Column({type: DataType.INTEGER})
  classId: number;
}