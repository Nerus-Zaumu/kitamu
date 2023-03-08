import { ApiProperty } from '@nestjs/swagger';
export class StoreDto {
  @ApiProperty({
    name: 'name',
    required: true,
  })
  name: string;

  @ApiProperty({
    name: 'email',
    required: true,
  })
  email: string;

  @ApiProperty({
    name: 'password',
    required: true,
  })
  password: string;

  @ApiProperty({
    name: 'description',
    required: true,
  })
  description: string;

  @ApiProperty({
    name: 'address',
    required: true,
  })
  address: string;
}

export default StoreDto;
