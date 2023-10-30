import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CursoEntity } from "./curso.entity";

@Entity('estudiante', { schema: 'cursos' })
export class EstudianteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAT: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAT: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAT: Date;

  @ManyToMany(() => CursoEntity, curso => curso.estudiante)
  curso: CursoEntity[];

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'student name',
  })
  name: string;

  @Column('number', {
    name: 'cedula',
    nullable: false,
    comment: 'numero de cedula',
  })
  price: number;

  @Column('varchar', {
    name: 'last name',
    nullable: true,
    comment: 'student last name',
  })
  description: string;
}