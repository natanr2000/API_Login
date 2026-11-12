import {Controller, Post, Body, HttpStatus} from '@nestjs/common';
import { CreateUserDto } from './users.dto.js';
import { UsersService } from './users.service.js';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.login(createUserDto);
        return {
            message: 'User created successfully',
            statusCode: HttpStatus.CREATED
        };
    }
}
