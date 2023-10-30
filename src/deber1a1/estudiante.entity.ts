import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { InformacionEntity } from "./informa.entity";

@Entity('informacion',{schema: ''})

export class EstudianteEntity
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

 @OneToOne(() => InformacionEntity, info => info.Estudi)
 @JoinColumn()
 info:InformacionEntity;

@Column('number', {
    name: 'idestudiante',
    nullable: false,
    comment: 'id'
})
idestu: number;

@Column('varchar', {
    name: 'lastname',
    nullable: false,
    comment: 'user lastname'
})
lastname: string;

@Column('varchar', {
    name: 'name',
    nullable: true,
    comment: 'user name'
})
name: string;


}