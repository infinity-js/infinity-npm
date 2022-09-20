import { HttpExceptionContract } from '@infinity-js/core/contracts';
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

    const exceptionResponse = exception.getResponse();

    const message: string[] = this.parseMessage(
      exceptionResponse,
      exception.message,
    );

    const exceptionToReturn: HttpExceptionContract = {
      statusCode: exception.getStatus(),
      name: exception.name,
      message,
    };

    response.status(exception.getStatus()).json(exceptionToReturn);
  }

  private parseMessage(message: any, defaultMessage: string): string[] {
    if (typeof message === 'string') {
      return [message];
    }

    if (typeof message === 'object') {
      const messageInsideResponse = message['message'];

      if (typeof messageInsideResponse === 'string') {
        return [messageInsideResponse];
      }

      if (Array.isArray(messageInsideResponse)) {
        return messageInsideResponse;
      }
    }

    return [defaultMessage];
  }
}
