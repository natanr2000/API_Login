import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './users.dto.js';
import { UsersService } from './users.service.js';
import { User } from '../generated/prisma/client.js';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.login(createUserDto);
    }
}
