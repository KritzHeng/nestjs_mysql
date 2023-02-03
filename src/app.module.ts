import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
const settings = require('../ormconfig.json');
// import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(settings),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
