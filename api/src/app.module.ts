import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import {TypeOrmModule, TypeOrmModuleOptions} from "@nestjs/typeorm";
import "dotenv-safe/config";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST as any,
  port: process.env.DB_PORT as any,
  username: process.env.DB_USERNAME as any,
  password: process.env.DB_PASSWORD as any,
  database: process.env.DB_DATABASE as any,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true
}

@Module({
  imports: [ProjectsModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
