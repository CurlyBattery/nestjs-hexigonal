import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';

export interface CreateUserDto {
  name: string;
  email: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor() {}
}
