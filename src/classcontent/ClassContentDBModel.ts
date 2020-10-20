import {
  AllowNull,
  AutoIncrement, BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table, Unique,
  UpdatedAt
} from 'sequelize-typescript';
import {SchoolPersonnelDBModel} from '../schoolpersonnel/SchoolPersonnelDBModel';
import { NominalRollDBModel } from '../nominalroll/NominalRollDBModel';

@Table({tableName: 'class_content'})

export class ClassContentDBModel extends Model<ClassContentDBModel> {
  @PrimaryKey
  @AutoIncrement
  @Column({type: DataType.INTEGER})
  id: number;

  @AllowNull(false)
  @Column({type: DataType.STRING})
  subjectCode: string

  @AllowNull(false)
  @Column({type: DataType.STRING})
  subjectName: string

  @AllowNull(false)
  @Unique(true)
  @Column({type: DataType.STRING})
  classCode: string

  @AllowNull(false)
  @Column({type: DataType.STRING})
  className: string

  @CreatedAt
  @Column({ type: DataType.DATE })
  public readonly createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  public readonly updatedAt: Date;

  @BelongsToMany(() => SchoolPersonnelDBModel, () => NominalRollDBModel)
  schoolPersonnel: Array<SchoolPersonnelDBModel & {NominalRollDBModel: NominalRollDBModel}>;
}