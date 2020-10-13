import {
  AllowNull,
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';

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
  email: string

  @AllowNull(false)
  @Column({type: DataType.STRING})
  role: string

  @CreatedAt
  @Column({ type: DataType.DATE })
  public readonly createdAt: Date;

  @UpdatedAt
  @Column({ type: DataType.DATE })
  public readonly updatedAt: Date;

}