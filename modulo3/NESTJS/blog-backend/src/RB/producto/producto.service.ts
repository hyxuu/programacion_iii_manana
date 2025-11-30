import { Injectable, NotFoundException } from '@nestjs/common'; 
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate'; 

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const producto = this.productoRepository.create({
      nombre: createProductoDto.nombre,
      precio: createProductoDto.precio,
      restaurante: { id: createProductoDto.restauranteId },
      categoria: { id: createProductoDto.categoriaId },
    });

    return await this.productoRepository.save(producto);
  }

  async findAll(options: IPaginationOptions, restauranteId?: string): Promise<Pagination<Producto>> {
    
    return paginate<Producto>(this.productoRepository, options, {
      where: { 
        restaurante: restauranteId ? { id: restauranteId } : {},
      },
      relations: ['categoria'], 
    });
  }

  async findOne(id: string) {
    const producto = await this.productoRepository.findOneBy({ id });
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {
    const producto = await this.productoRepository.preload({
      id: id,
      ...updateProductoDto,
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    return await this.productoRepository.save(producto);
  }

  async remove(id: string) {
    const producto = await this.findOne(id); 
    return await this.productoRepository.remove(producto);
  }
  
  async removeAll() {
    const query = await this.productoRepository.delete({});
    return { message: `Se han eliminado ${query.affected} productos` };
  }
}