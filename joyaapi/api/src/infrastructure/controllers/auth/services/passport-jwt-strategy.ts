import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

const cookieExtractor = (req: any) => {
  let token = null;

  if (req && req.headers) {
    token = req.cookies['access_token'];
  }
  return token;
};

const cookieExtractorForMobile = (req: any) => {
  //TODO bien set les cookies
  let token = null;
  if (req && req.headers) {
    let result = req.headers.cookies;
    if (!result) return token;
    token = result
      .replace('{', '')
      .replace('}', '')
      .replace(/\s/g, '')
      .split(':');
    token = token[token.length - 1];
  }
  return token;
};

@Injectable()
class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        cookieExtractor,
        cookieExtractorForMobile,
      ]),
      secretOrKey: process.env.JWT_SECRET || 'WyILUzs614nroDOw5g7NezSfCqDWBgeU',
    });
  }

  async validate(payload: any) {
    return { _id: payload._id, email: payload.email, type: payload.type };
  }
}

export { JwtStrategy };
