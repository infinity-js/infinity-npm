import { ApiProperty } from '@nestjs/swagger';

export class HttpExceptionContract {
  @ApiProperty({
    type: Number,
    example: 400,
  })
  statusCode!: number;

  @ApiProperty({
    type: String,
    example: 'Bad Request',
  })
  name!: string;

  @ApiProperty({
    type: [String],
    example: ['User already exists'],
  })
  message!: string[];
}
