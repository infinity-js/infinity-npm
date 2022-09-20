import { InfinityException } from '@infinity-js/core/exceptions';
import { RestExceptionContract } from '@infinity-js/core/contracts';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch(InfinityException)
export class InfinityExceptionHandler implements ExceptionFilter {
  catch(exception: InfinityException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const exceptionContract: RestExceptionContract = {
      message: [exception.message],
      name: exception.name,
      statusCode: exception.statusCode,
    };

    response.status(exception.statusCode).json(exceptionContract);
  }
}
