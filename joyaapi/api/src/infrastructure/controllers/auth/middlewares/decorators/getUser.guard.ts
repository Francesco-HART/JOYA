import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserTypesEnum } from '../../../../../domain/models/user';

const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): { _id: string; type: UserTypesEnum } => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);

export { GetUser };
