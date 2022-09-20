import { HttpStatus, RpcStatus } from '../enums';
import { InfinityException } from './global.exception';

type InternalExceptionParamsDTO = {
  message: string;
  portugueseMessage: string;
};

export class InternalException extends InfinityException {
  constructor(params: InternalExceptionParamsDTO) {
    super({
      name: `InternalException`,
      message: params.message,
      portugueseMessage: params.portugueseMessage,
      rpcCode: RpcStatus.INTERNAL,
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
