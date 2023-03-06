import { PartialType } from '@nestjs/swagger';
import { AccountDto } from './create-auth.dto';

export class UpdateAuthDto extends PartialType(AccountDto) {}
