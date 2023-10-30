import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EstudianteEntity } from "./estudiante.entity";

@Entity('curso', { schema: 'cursos' })
export class CursoEntity {
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

  @ManyToMany(() => EstudianteEntity, estudiante => estudiante.curso)
  @JoinTable()
  estudiante: EstudianteEntity[];

  @Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'course name',
  })
  name: string;

  @Column('number', {
    name: 'course number',
    nullable: false,
    comment: 'course number',
  })
  course: number;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'course description',
  })
  description: string;
}