import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table, Unique,
  UpdatedAt
} from 'sequelize-typescript';
import {ROLE} from "./SchoolPersonnel";

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
  @Column({type: DataType.STRING})
  @Unique(true)
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

}