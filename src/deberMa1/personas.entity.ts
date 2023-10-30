import { Column, CreateDateColumn, DeleteDateColumn, JoinColumn, OneToMany, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { DispositivosEntity } from "./dispositivos.entity";

@Entity('personas', {schema: 'publicaciones'})

export class PersonasEntity
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

 @OneToMany(() => DispositivosEntity, disposi => disposi.personas)
 @JoinColumn()
 disposi:DispositivosEntity;

@Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'person name'
})
name: string;


@Column('varchar', {
    name: 'lastname',
    nullable: true,
    comment: 'person lastname'
})
lastname: string;



}