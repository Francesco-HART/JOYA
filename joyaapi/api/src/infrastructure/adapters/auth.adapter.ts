import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAuthPort } from '../../domain/ports/auth.port';
import { UserDocument, UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

class AuthAdapter implements IAuthPort {
  constructor(
    @InjectModel(UserEntity.name)
    private readonly userEntity: Model<UserDocument>,
  ) {}

  async verifyIfPasswordIsValid(
    hashedPassword: string,
    password: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }

  login(jwtService: JwtService, dto: UserEntity): string {
    const payload = { email: dto.email, _id: dto._id, type: dto.type };
    return jwtService.sign(payload);
  }

  async getProfile(id: string): Promise<UserEntity> {
    return await this.userEntity.findById(id);
  }
}

export { AuthAdapter };
