import { RestExceptionContract } from '@infinity-js/core/contracts';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const exceptionToReturn: RestExceptionContract = {
      statusCode: exception.getStatus(),
      message: [exception.message],
      name: exception.name,
    };

    response.status(exception.getStatus()).json(exceptionToReturn);
  }
}
