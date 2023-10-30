import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToOne, JoinColumn, Column } from "typeorm";
import { PedidosEntity } from "./pedidos.entity";
@Entity('pedidos',{schema: ''})

export class ClientesEntity
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

 @OneToOne(() => ClientesEntity, pedido => pedido.cliente)
 @JoinColumn()
 pedido:ClientesEntity;

@Column('number', {
    name: 'cedula',
    nullable: false,
    comment: 'cedula del cliente'
})
cedula: number;

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