import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return this.usersService.getUserById(id);
    }

    @Get()
    async getUsers(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto.email, createUserDto.username)
    }

    @Patch(':idd')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.updateUser(id, updateUserDto);
    }
}
