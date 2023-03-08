import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @ApiProperty({
    example: 'Koki Corn',
    required: true,
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    name: 'Image here',
    required: true,
  })
  thumbnail: Blob;

  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  @MinLength(75)
  @ApiProperty({
    name: 'Meal description',
    required: true,
  })
  description: string;

  @ApiProperty({
    example: 0.5,
  })
  discount: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 0.5,
    required: true,
  })
  price: number;
}

export default CreateFoodDto;
