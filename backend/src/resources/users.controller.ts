import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagesService } from './messages.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly messageService: MessagesService,
  ) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Get('users')
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('users/:id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch('users/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updatePassword(+id, updateUserDto);
  }

  @Delete('users/:id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // Messages
  @Get('users/:id/messages')
  async getUserMessages(@Param('id') id: number) {
    return this.messageService.getUserMessages(id);
  }

  @Get('users/:userId/messages/:otherUserId')
  async getMessageChain(
    @Param('userId') userId: number,
    @Param('otherUserId') otherUserId: number,
  ) {
    return this.messageService.getMessageChain(userId, otherUserId);
  }

  @Post('users/:id/messages')
  async sendMessage(
    @Param('id') senderId: number,
    @Body() { recieverId, content }: { recieverId: number; content: string },
  ) {
    return this.messageService.createMessage(senderId, recieverId, content);
  }
}
