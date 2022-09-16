import { v4 as uuidV4 } from 'uuid';

export type InfinityGlobalExceptionParamsDTO = {
  message: string;
  portugueseMessage: string;
  name: string;
  statusCode: number;
  rpcCode: number;
};

export class InfinityGlobalException extends Error {
  errorId: string = uuidV4();
  portugueseMessage: string;
  statusCode: number;
  rpcCode: number;

  constructor(params: InfinityGlobalExceptionParamsDTO) {
    super(params.message);
    this.name = `InfinityGlobalException: ${params.name}`;
    this.portugueseMessage = params.portugueseMessage;
    this.statusCode = params.statusCode;
    this.rpcCode = params.rpcCode;
  }
}
