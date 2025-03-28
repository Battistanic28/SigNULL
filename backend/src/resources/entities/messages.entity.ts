import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: number;

  @Column()
  receiverId: number;

  @ManyToOne(() => User, (user) => user.sentMessages, { onDelete: 'CASCADE' })
  sender: User;

  @ManyToOne(() => User, (user) => user.receivedMessages, {
    onDelete: 'CASCADE',
  })
  receiver: User;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
