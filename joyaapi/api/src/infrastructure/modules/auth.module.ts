import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IAuthPort } from '../../domain/ports/auth.port';
import { GetProfileUseCase } from '../../use-cases/auth/get-profile.usecase';
import { LoginUseCase } from '../../use-cases/auth/login.usecase';
import { ValidateCredentialsUseCase } from '../../use-cases/auth/validate-credentials.usecase';
import { AuthAdapter } from '../adapters/auth.adapter';
import { AuthController } from '../controllers/auth/auth.controller';
import { UserEntity, UserSchema } from '../entities/user.entity';
import { LocalAuthGuard } from '../controllers/auth/middlewares/auth.guard';
import { LocalStrategy } from '../controllers/auth/services/local-strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../controllers/auth/services/passport-jwt-strategy';
import { IUserPort } from '../../domain/ports/user.port';
import { UserAdapter } from '../adapters/user.adapter';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'WyILUzs614nroDOw5g7NezSfCqDWBgeU',
      signOptions: { expiresIn: '300000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    JwtStrategy,
    LocalStrategy,
    LoginUseCase,
    AuthAdapter,
    LocalStrategy,
    LocalAuthGuard,
    ValidateCredentialsUseCase,
    GetProfileUseCase,
    { provide: IAuthPort, useClass: AuthAdapter },
    { provide: IUserPort, useClass: UserAdapter },
  ],
  exports: [PassportModule],
})
export class AuthModule {}
