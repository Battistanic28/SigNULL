import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Message } from './entities/messages.entity';
import { MessagesService } from './messages.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User, Message, JwtService])],
  controllers: [UsersController],
  providers: [UsersService, MessagesService, JwtService],
})
export class UsersModule {}
