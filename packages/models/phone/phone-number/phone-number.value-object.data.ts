import { IsString } from 'class-validator';

export class PhoneNumberData {
  @IsString()
  ddi!: string;

  @IsString()
  ddd!: string;

  @IsString()
  number!: string;
}
