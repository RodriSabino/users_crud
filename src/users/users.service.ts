import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';

export class UsersService {
    private users = [{name: 'John Doe', id: '1'}];
    async findAll() {
        return this.users;
    }

    async findById(id: string) {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            throw new NotFoundException('User not found ${id}');
        }

        return user;
    }

    async createUser(createUserDto: any) {
        this.users.push(createUserDto);
        return createUserDto;
    }

    async updateUser(updateUserDto: any, id: string) {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            throw new NotFoundException('User not found ${id}');
        }

        return { id, updateUserDto };
    }

    async deleteById(id: string) {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            throw new NotFoundException('User not found ${id}');
        }

        return { id };
    }
    

}
