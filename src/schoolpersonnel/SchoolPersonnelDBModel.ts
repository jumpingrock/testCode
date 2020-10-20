import {
  AllowNull,
  AutoIncrement, BelongsTo, BelongsToMany,
  Column,
  CreatedAt,
  DataType, ForeignKey,
  Model,
  PrimaryKey,
  Table, Unique,
  UpdatedAt
} from 'sequelize-typescript';
import {ROLE} from './SchoolPersonnel';
import {ClassContentDBModel} from "../classcontent/ClassContentDBModel";
import {NominalRollDBModel} from "../nominalroll/NominalRollDBModel";

@Table({tableName: 'school_personnel'})

export class SchoolPersonnelDBModel extends Model<SchoolPersonnelDBModel>{
  @PrimaryKey
  @AutoIncrement
  @Column({type: DataType.INTEGER})
  id: number;

  @AllowNull(false)
  @Column({type: DataType.STRING})
  name: string;

  @AllowNull(false)
  @Unique(true)
  @Column({type: DataType.STRING})
  email: string

  @AllowNull(false)
  @Column({type: DataType.STRING})
  role: ROLE

  @CreatedAt
  @Column({ type: DataType.DATE })
  public readonly createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  public readonly updatedAt: Date;

  @BelongsToMany(() => ClassContentDBModel, () => NominalRollDBModel)
  classes: Array<ClassContentDBModel & {NominalRollDBModel: NominalRollDBModel}>;
}