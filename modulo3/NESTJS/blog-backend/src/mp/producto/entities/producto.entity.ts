import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Restaurante } from '../../restaurante/entities/restaurante.entity';
import { Categoria } from '../../categoria/entities/categoria.entity'; 

@Entity()
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('numeric') 
  precio: number;

  @ManyToOne(() => Restaurante, (restaurante) => restaurante.productos)
  restaurante: Restaurante;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  categoria: Categoria;
}