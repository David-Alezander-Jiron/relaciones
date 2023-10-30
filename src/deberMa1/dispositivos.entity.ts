import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PersonasEntity } from "./personas.entity";

@Entity('dispositivos', {schema: 'publicaciones'})

export class DispositivosEntity
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

 @ManyToOne(() => PersonasEntity, personas => personas.disposi)
 personas:PersonasEntity;

@Column('varchar', {
    name: 'name',
    nullable: false,
    comment: 'product name'
})
name: string;

@Column('number', {
    name: 'price',
    nullable: false,
    comment: 'product price'
})
price: number;

@Column('varchar', {
    name: 'description',
    nullable: true,
    comment: 'product description'
})
description: string;



}