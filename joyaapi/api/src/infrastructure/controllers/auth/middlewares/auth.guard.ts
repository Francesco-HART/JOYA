import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
class LocalAuthGuard extends AuthGuard('local') {}

@Injectable()
class JwtAuthGuard extends AuthGuard('jwt') {}

export { LocalAuthGuard, JwtAuthGuard };
