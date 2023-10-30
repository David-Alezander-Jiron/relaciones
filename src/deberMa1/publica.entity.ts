import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioEntity } from "./usuarios.entity";

@Entity('publicaciones', {schema: 'publicaciones'})

export class PublicacionesEntity
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

 @OneToMany(() => UsuarioEntity, usuario => usuario.publi)
 usuario:UsuarioEntity;

@Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'post name'
})
name: string;


@Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'post description'
})
description: string;



}