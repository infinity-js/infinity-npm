import { validateEntity } from '@infinity-js/core/validation';
import { PhoneNumberData } from './phone-number.value-object.data';

export class PhoneNumber {
  private _ddi: string;
  private _ddd: string;
  private _number: string;

  private constructor(data: PhoneNumberData) {
    this._ddi = data.ddi;
    this._ddd = data.ddd;
    this._number = data.number;
  }

  static instantiate(data: PhoneNumberData): PhoneNumber {
    PhoneNumber.validate(data);
    return new PhoneNumber(data);
  }

  static validate(data?: PhoneNumberData) {
    validateEntity(PhoneNumberData, data);
  }
}
