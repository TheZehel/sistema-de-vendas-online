import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() createUser: createUserDto): Promise<createUserDto> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }
}
