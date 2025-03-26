import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/messages.entity';
import { User } from './entities/user.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private messageRepo: Repository<Message>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async getUserMessages(userId: number): Promise<Message[]> {
    return this.messageRepo.find({
      where: [{ sender: { id: userId } }, { receiver: { id: userId } }],
      order: { createdAt: 'DESC' },
    });
  }

  async getMessageChain(userAId: number, userBId: number): Promise<Message[]> {
    return this.messageRepo.find({
      where: [
        { sender: { id: userAId }, receiver: { id: userBId } },
        { sender: { id: userBId }, receiver: { id: userAId } },
      ],
      order: { createdAt: 'ASC' },
    });
  }

  async createMessage(
    senderId: number,
    receiverId: number,
    content: string,
  ): Promise<Message> {
    const message = this.messageRepo.create({ senderId, receiverId, content });
    return this.messageRepo.save(message);
  }
}
