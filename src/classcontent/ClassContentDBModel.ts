import {
  AllowNull,
  AutoIncrement, BelongsTo,
  Column,
  CreatedAt,
  DataType, ForeignKey,
  Model,
  PrimaryKey,
  Table, Unique,
  UpdatedAt
} from "sequelize-typescript";
import {SUBJECT} from "../subject/subject";
import {SchoolPersonnelDBModel} from "../SchoolPersonnel/SchoolPersonnelDBModel";

@Table({tableName: 'class_content'})

export class ClassContentDBModel extends Model<ClassContentDBModel> {
  @PrimaryKey
  @AutoIncrement
  @Column({type: DataType.INTEGER})
  id: number;

  @AllowNull(false)
  @Column({type: DataType.STRING})
  subjectCode: SUBJECT

  @AllowNull(false)
  @Column({type: DataType.STRING})
  subjectName: string

  @AllowNull(false)
  @Column({type: DataType.STRING})
  @Unique(true)
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
}