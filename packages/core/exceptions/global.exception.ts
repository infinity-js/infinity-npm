import { v4 as uuidV4 } from 'uuid';

export type InfinityExceptionParamsDTO = {
  message: string;
  portugueseMessage: string;
  name: string;
  statusCode: number;
  rpcCode: number;
};

export class InfinityException extends Error {
  errorId: string = uuidV4();
  portugueseMessage: string;
  statusCode: number;
  rpcCode: number;

  constructor(params: InfinityExceptionParamsDTO) {
    super(params.message);
    this.name = `InfinityException: ${params.name}`;
    this.portugueseMessage = params.portugueseMessage;
    this.statusCode = params.statusCode;
    this.rpcCode = params.rpcCode;
  }
}
