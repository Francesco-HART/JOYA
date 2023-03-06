import { FastifyReply } from "fastify";

class HttpError extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, this.constructor);
  }
}

function replyHttpError(error: any, reply: FastifyReply) {
  if (error instanceof HttpError) return reply.code(error.status).send(error);
  else {
    console.error(error); // TODO : utiliser un logger
    const httpError = new HttpError(500, "Une erreur est survenue");
    return reply.code(500).send(httpError);
  }
}

export { HttpError, replyHttpError };
