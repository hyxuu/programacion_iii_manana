import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { BasicsModule } from './basics/basics.module';
import { RestauranteModule } from './RB/restaurante/restaurante.module';
import { ProductoModule } from './RB/producto/producto.module';
import { CategoriaModule } from './RB/categoria/categoria.module';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI || ''),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true /*ssl: { rejectUnauthorized: false },*/,
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),

      serveRoot: '/',
    }),

    AuthModule,
    BasicsModule,
    UsersModule,
    CategoriesModule,
    CursosModule,
    PostsModule,
    RestauranteModule,
    ProductoModule,
    CategoriaModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
