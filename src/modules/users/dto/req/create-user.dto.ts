import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNotIn,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreateUserDto {
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(2, 20)
  @ApiProperty({
    example: 'John Snow',
    description: 'The name of user',
    required: true,
  })
  public readonly name: string;

  @Transform(TransformHelper.trim)
  @IsEmail()
  public readonly email: string;

  @Transform(TransformHelper.trim)
  @IsNotIn(['password', 'qwe', '123'])
  @IsString()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Incorrect password',
  })
  public readonly password: string;

  @IsInt()
  @IsNumber()
  @Max(120)
  @Min(15)
  @IsOptional()
  public readonly age?: number;

  @Transform(TransformHelper.trim)
  @IsString()
  @IsOptional()
  public readonly phone?: string;
}
