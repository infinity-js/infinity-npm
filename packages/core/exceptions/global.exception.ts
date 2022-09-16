export type InfinityGlobalExceptionParamsDTO = {
  message: string;
  portugueseMessage: string;
  name: string;
  statusCode: number;
  rpcCode: number;
};

export class InfinityGlobalException extends Error {
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
