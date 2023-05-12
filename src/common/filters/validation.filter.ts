import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Error as MongooseError } from 'mongoose';

@Catch(MongooseError.ValidationError)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: MongooseError.ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const status = 400;

    response
      .status(status)
      .send({
        statusCode: status,
        message: exception.message,
      });
  }
}