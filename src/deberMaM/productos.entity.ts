import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ClienteEntity } from "./cliente.entity";

@Entity('producto', { schema: 'productos' })
export class ProductoEntity {
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

  @ManyToMany(() => ClienteEntity, (cliente) => cliente.productos)
  clientes: ClienteEntity[];

  @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'nombre del producto',
  })
  nombre: string;

  @Column('number', {
    name: 'precio',
    nullable: false,
    comment: 'precio del producto',
  })
  precio: number;

}