import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { UnprocessableEntityException } from '../exceptions';
import { MessageFormatter } from './class-validator';

export function validateEntity<T extends object>(
  classValue: new () => T,
  data: any,
) {
  if (!data) {
    throw new UnprocessableEntityException({
      entity: classValue.name,
      message: 'Data is required',
      portugueseMessage: 'Dados são obrigatórios',
    });
  }

  const dtoToValidate = plainToInstance(classValue, data);

  const errors = validateSync(dtoToValidate);

  if (errors.length > 0) {
    throw new UnprocessableEntityException({
      entity: classValue.name,
      message: JSON.stringify(MessageFormatter.format(errors)),
      portugueseMessage: 'Falha na validação',
    });
  }
}
