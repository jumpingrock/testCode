import {
  AllowNull,
  AutoIncrement, BelongsTo,
  Column,
  CreatedAt,
  DataType, ForeignKey, HasMany,
  Model,
  PrimaryKey,
  Table, Unique,
  UpdatedAt
} from 'sequelize-typescript';
import {SchoolPersonnelDBModel} from '../schoolpersonnel/SchoolPersonnelDBModel';

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

  @ForeignKey(() => SchoolPersonnelDBModel)
  @Column({type: DataType.INTEGER})
  teacherId: number

  @BelongsTo(() => SchoolPersonnelDBModel)
  teacher: SchoolPersonnelDBModel

  @HasMany(() => SchoolPersonnelDBModel)
  students: SchoolPersonnelDBModel[]
}