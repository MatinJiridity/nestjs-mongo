import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from '../schemas/user.schema';
import { CreateUserParams } from '../utils/types';
import {v4 } from 'uuid';
import { UpdateUserDto } from '../dtos/UpdateUser.dto';

@Injectable()
export class UsersService {
    constructor(private readonly userRepos: UsersRepository) { }

    getUserById(id: string): Promise<User> {
        return this.userRepos.findOne({ id });
    }

    getAllUsers(): Promise<User[]> {
        return this.userRepos.find();
    }

    createUser(
        username: string,
        email: string
    ): Promise<User> {
        return this.userRepos.create({id: v4(),username, email})
    }

    updateUser(id:string, updateUserDto: UpdateUserDto) : Promise<User> {
        return this.userRepos.findOneAndUpdate({id}, {...updateUserDto})
    }
}
