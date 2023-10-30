import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, Column } from "typeorm";

@Entity('cliente',{schema: ''})

export class PedidosEntity
{
    [x: string]: any;
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

 @OneToOne(() => PedidosEntity, cliente => cliente.pedido)
 @JoinColumn()
 cliente:PedidosEntity;

@Column('number', {
    name: 'idorder',
    nullable: false,
    comment: 'id'
})
idestu: number;

@Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'order name'
})
name: string;

@Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'order description'
})
description: string;


}