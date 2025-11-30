import { Controller, Get, Post, Body, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Restaurante } from './entities/restaurante.entity';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'; 

@Controller('restaurante')
export class RestauranteController {
  constructor(private readonly restauranteService: RestauranteService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createRestauranteDto: CreateRestauranteDto) {
    return this.restauranteService.create(createRestauranteDto);
  }

  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Pagination<Restaurante>> {
    limit = limit > 100 ? 100 : limit;

    return this.restauranteService.findAll({
      page,
      limit,
      route: 'http://localhost:3000/restaurante',
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) { 
    return this.restauranteService.findOne(id); 
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateRestauranteDto: UpdateRestauranteDto) {
    return this.restauranteService.update(id, updateRestauranteDto); 
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.restauranteService.remove(id); 
  }
}