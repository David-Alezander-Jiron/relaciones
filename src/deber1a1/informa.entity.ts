import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { EstudianteEntity } from "./estudiante.entity";

@Entity('estudiantes',{schema: ''})

export class InformacionEntity
{
 @PrimaryGeneratedColumn('uuid')
 id:string;
 @CreateDateColumn({
    name:'create_at',
    type:'timestamp',
    default:()=> 'CURRENT_TIMESTAMP',
 })
 createAT:Date;

 @UpdateDateColumn({
    name:'update_at',
    type:'timestamp',
    default:()=> 'CURRENT_TIMESTAMP',
 })
 updateAT:Date;

 @DeleteDateColumn({
    name:'delete_at',
    type:'timestamp',
    nullable: true,
 })
 deleteAT:Date;

 @OneToOne(() => EstudianteEntity, Estudi => Estudi.info)
 @JoinColumn()
 Estudi:EstudianteEntity;

@Column('varchar', {
    name: 'city',
    nullable: false,
    comment: 'city name'
})
city: string;

@Column('number', {
    name: 'telephone',
    nullable: false,
    comment: 'student number'
})
telephone: number;

@Column('number', {
    name: 'idestudiante',
    nullable: true,
    comment: 'id student'
})
idestu: number;


}