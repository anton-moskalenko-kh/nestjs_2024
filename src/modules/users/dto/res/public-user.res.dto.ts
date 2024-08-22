import { PickType } from '@nestjs/swagger';

import { BaseUserResDto } from './base-user.res.dto';

export class PublicUserResDto extends PickType(BaseUserResDto, [
  'id',
  'email',
  'name',
  'age',
  'phone',
]) {}
