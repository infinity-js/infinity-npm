import { HttpStatus, RpcStatus } from '../enums';
import { InfinityException } from './global.exception';

type UnprocessableEntityExceptionParamsDTO = {
  entityName: string;
  message: string;
  portugueseMessage: string;
};

export class UnprocessableEntityException extends InfinityException {
  entityName: string;

  constructor(params: UnprocessableEntityExceptionParamsDTO) {
    super({
      name: 'UnprocessableEntityException',
      message: params.message,
      portugueseMessage: params.portugueseMessage,
      rpcCode: RpcStatus.INVALID_ARGUMENT,
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    });

    this.entityName = params.entityName;
  }
}
