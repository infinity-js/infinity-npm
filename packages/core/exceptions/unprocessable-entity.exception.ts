import { HttpStatus, RpcStatus } from '../enums';
import { InfinityGlobalException } from './global.exception';

type UnprocessableEntityExceptionParamsDTO = {
  entity: string;
  message: string;
  portugueseMessage: string;
};

export class UnprocessableEntityException extends InfinityGlobalException {
  constructor(params: UnprocessableEntityExceptionParamsDTO) {
    super({
      name: `UnprocessableEntityException (${params.entity})`,
      message: params.message,
      portugueseMessage: params.portugueseMessage,
      rpcCode: RpcStatus.INVALID_ARGUMENT,
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    });
  }
}
