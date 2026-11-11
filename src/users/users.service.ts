
import { Injectable, ConflictException } from '@nestjs/common';
import {CreateUserDto} from "./users.dto.js";
import { PrismaService } from '../prisma/prisma.service.js';
import { User } from '../generated/prisma/client.js';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}
    async login(createUserDto: CreateUserDto): Promise<User> {
        if (await this.prisma.user.findUnique({ where: {email: createUserDto.email} })) {
            throw new ConflictException('User already exists');
        }
        return this.prisma.user.create({ data: createUserDto })
    }
}


