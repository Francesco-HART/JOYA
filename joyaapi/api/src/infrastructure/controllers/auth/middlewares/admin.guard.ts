import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AccountTypesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const types = this.reflector.get<string[]>('types', context.getHandler());
    if (!types) return true;
    const request = context.switchToHttp().getRequest();
    const { user } = request;
    return types.some((type) => user.type === type);
  }
}
