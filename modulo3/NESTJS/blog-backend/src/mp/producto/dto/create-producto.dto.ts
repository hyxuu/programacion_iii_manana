import { IsString, IsNumber, IsNotEmpty, IsUUID, Min } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsNumber()
  @Min(0) 
  precio: number;

  @IsString()
  @IsUUID() 
  @IsNotEmpty()
  restauranteId: string;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  categoriaId: string;
}