import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PublicacionesEntity } from "./publica.entity";

@Entity('usuario', {schema: 'publicaciones'})

export class UsuarioEntity
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

 @OneToMany(() => PublicacionesEntity, publi => publi.usuario)
 @JoinColumn()
 publi:PublicacionesEntity;

@Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'user name'
})
title: string;

@Column('number', {
    name: 'cedula',
    nullable: false,
    comment: 'cedula del usuario'
})
cedula: number;

@Column('varchar', {
    name: 'lastname',
    nullable: true,
    comment: 'user lastname'
})
lastname: string;



}