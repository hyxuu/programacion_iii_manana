import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurante } from './entities/restaurante.entity';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectRepository(Restaurante)
    private readonly restauranteRepository: Repository<Restaurante>,
  ) {}

  async create(createRestauranteDto: CreateRestauranteDto) {
    const restaurant = this.restauranteRepository.create(createRestauranteDto);
    return await this.restauranteRepository.save(restaurant);
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Restaurante>> {
    return paginate<Restaurante>(this.restauranteRepository, options);
  }
  // -----------------------------

  async findOne(id: string) {
    const restaurante = await this.restauranteRepository.findOne({
      where: { id },
      relations: ['productos'], 
    });

    if (!restaurante) {
      throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
    }
    return restaurante;
  }

  async update(id: string, updateRestauranteDto: UpdateRestauranteDto) {
    const restaurante = await this.restauranteRepository.preload({
      id: id,
      ...updateRestauranteDto,
    });

    if (!restaurante) {
      throw new NotFoundException(`Restaurante con ID ${id} no encontrado`);
    }

    return await this.restauranteRepository.save(restaurante);
  }

  async remove(id: string) {
    const restaurante = await this.findOne(id); 
    return await this.restauranteRepository.remove(restaurante);
  }
}