import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    const existingUser = await this.usersRepository.findOne({
      where: [{ email }],
    });
    if (existingUser) {
      throw new ConflictException(
        `A user with email address: ${email} already exists.`,
      );
    }

    const user = new User(createUserDto);
    await this.entityManager.save(user);
  }

  async signIn(email: string, pass: string): Promise<any> {
    const existingUser = await this.usersRepository.findOne({
      where: [{ email }],
    });

    if (!existingUser) {
      throw new UnauthorizedException('User does not exist');
    }

    const isPasswordValid = await bcrypt.compare(pass, existingUser.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    /**
     * DEMO PURPOSES ONLY
     * a true auth service needs to be
     * developed for a production env.
     */
    const mockJwt = randomUUID();
    /** */

    return {
      access_token: mockJwt,
      user: existingUser,
    };
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async updatePassword(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    user.password = updateUserDto.password;
    await this.entityManager.save(user);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
