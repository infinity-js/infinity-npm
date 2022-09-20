import { HttpStatus, RpcStatus } from '../enums';
import { InfinityGlobalException } from './global.exception';

type AlreadyExistsExceptionParamsDTO = {
  message: string;
  portugueseMessage: string;
};

export class AlreadyExistsException extends InfinityGlobalException {
  constructor(params: AlreadyExistsExceptionParamsDTO) {
    super({
      name: `AlreadyExistsException`,
      message: params.message,
      portugueseMessage: params.portugueseMessage,
      rpcCode: RpcStatus.ALREADY_EXISTS,
      statusCode: HttpStatus.BAD_REQUEST,
    });
  }
}
