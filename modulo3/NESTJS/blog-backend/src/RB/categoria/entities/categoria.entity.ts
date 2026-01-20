import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity'; 

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string; 

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}