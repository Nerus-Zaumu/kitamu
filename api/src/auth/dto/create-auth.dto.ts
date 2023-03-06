import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty({
    required: true,
    example: 'example@today.com',
  })
  email: string;

  @ApiProperty({
    required: true,
    example: 'password',
  })
  password: string;
}
