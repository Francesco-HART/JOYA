import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from '../../domain/models/user';
import { IUpdateUserDTO, IUserPort } from '../../domain/ports/user.port';
import { UserDocument, UserEntity } from '../entities/user.entity';
import { CreateUserDTO } from '../controllers/user/user.dto';
import { MongoError } from 'mongodb';
import * as bcrypt from 'bcryptjs';

export class UserAdapter implements IUserPort {
  constructor(
    @InjectModel(UserEntity.name)
    private userEntity: Model<UserDocument>,
  ) {}

  async getOneById(id: string): Promise<UserModel> {
    try {
      const user = await this.userEntity.findById(id);
      return user;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async updateUser(userId, dto: IUpdateUserDTO): Promise<UserModel> {
    try {
      return await this.userEntity.findOneAndUpdate({ _id: userId }, dto, {
        new: true,
      });
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async getOneByEmail(email: string): Promise<UserModel> {
    try {
      const user = await this.userEntity.findOne({ email }).lean();
      return user;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async fetch(): Promise<UserModel[]> {
    try {
      const user = await this.userEntity.find().lean();
      return user;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async create(createUserDTO: CreateUserDTO): Promise<UserModel> {
    try {
      createUserDTO.password = await bcrypt.hash(createUserDTO.password, 10);
      const user = await new this.userEntity(createUserDTO).save();
      return user;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async deleteUser(userId: string): Promise<UserModel> {
    try {
      const userDeleted = await this.userEntity.findOneAndDelete({
        _id: userId,
      });
      return userDeleted;
    } catch (error) {
      throw new MongoError(error);
    }
  }
}
