import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './users/users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://decentralized-voting-admin:N5Pu3gWkcBveLBY@decentralized-voting.wx8puyj.mongodb.net/?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
