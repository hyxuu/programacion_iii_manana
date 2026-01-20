import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Curso, CursoSchema } from './schemas/curso.schema';
import { Contenido, ContenidoSchema } from './schemas/contenido.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Curso.name, schema: CursoSchema },
      { name: Contenido.name, schema: ContenidoSchema },
    ]),
  ],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
