import {AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: 'student'})

export class StudentDBModel extends Model<StudentDBModel>{
  @PrimaryKey
  @AutoIncrement
  @Column({type: DataType.INTEGER})
  id: number;

}