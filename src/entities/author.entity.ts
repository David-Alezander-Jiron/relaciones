import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookEntity } from "./book.entity";

@Entity('authors', {schema: 'ventas'})

export class AuthorEntity
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

@OneToMany(() => BookEntity, book => book.author)
book: BookEntity[];

@Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'product name'
})
title: string;

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