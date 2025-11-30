import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'; 
import { Producto } from '../../producto/entities/producto.entity';

@Entity('restaurantes')
export class Restaurante {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('text')
  direccion: string;

  @Column('text')
  telefono: string;

  @OneToMany(() => Producto, (producto) => producto.restaurante)
  productos: Producto[];
}