import { validateOrReject, ValidationError } from "class-validator";
import { HttpError } from "./error.http";

async function validateClass(classToValidate: any) {
  await validateOrReject(classToValidate, {
    stopAtFirstError: true,
    whitelist: true,
  }).catch((error: ValidationError) => {
    if (error instanceof Array) {
      const constraints = error[0].constraints as Object;
      throw new HttpError(400, Object.values(constraints)[0]);
    } else throw error;
  });
}

export { validateClass };
