import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateRestauranteDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    telefono: string;
}