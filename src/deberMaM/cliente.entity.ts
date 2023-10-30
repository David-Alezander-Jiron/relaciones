import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductoEntity } from "./productos.entity";

@Entity('cliente', { schema: 'clientes' })
export class ClienteEntity {
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

  @ManyToMany(() => ProductoEntity, (producto) => producto.clientes)
  @JoinTable()
  productos: ProductoEntity[];

  @Column('varchar', {
    name: 'nombre',
    nullable: false,
    comment: 'nombre del cliente',
  })
  nombre: string;

  @Column('varchar', {
    name: 'apellido',
    nullable: false,
    comment: 'apellido del cliente',
  })
  apellido: string;

  @Column('number', {
    name: 'cedula',
    nullable: false,
    comment: 'cedula del cliente',
  })
  cedula: number;

}