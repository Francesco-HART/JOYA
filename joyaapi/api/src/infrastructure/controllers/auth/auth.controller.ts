import { Body, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetProfileUseCase } from '../../../use-cases/auth/get-profile.usecase';
import { GetUser } from './middlewares/decorators/getUser.guard';
import { JwtAuthGuard } from '../../../infrastructure/controllers/auth/middlewares/auth.guard';
import { LoginUseCase } from '../../../use-cases/auth/login.usecase';
import { LoginDTO } from './login.dto';
import { ValidateCredentialsUseCase } from '../../../use-cases/auth/validate-credentials.usecase';
import { UserPresenter } from '../user/user.presenter';

@ApiTags('auth')
@Controller('auth')
class AuthController {
  constructor(
    private readonly getProfileUseCase: GetProfileUseCase,
    private readonly loginUseCase: LoginUseCase,

    private readonly validateCredentials: ValidateCredentialsUseCase,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getProfile(@GetUser() userInfo): Promise<UserPresenter> {
    const user = await this.getProfileUseCase.execute(userInfo._id);
    return new UserPresenter(user);
  }

  @Post()
  async login(@Body() dto: LoginDTO, @Res({ passthrough: true }) response) {
    await this.validateCredentials.execute(dto);
    const loginJsonResult = await this.loginUseCase.execute(dto);

    response.cookie('access_token', loginJsonResult, {
      maxAge: 12 * 60 * 60 * 100000, // 12h
      httpOnly: true,
    });

    return loginJsonResult;
  }
}

export { AuthController };
