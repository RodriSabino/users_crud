import { Controller, Get, HttpCode, Param, Post, Patch, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll() {
        return await this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param("id") id: string) {
        return {
            id,
            name: "John Doe"
        }
    }

    @Post()
    async createUser(@Body() createUserDto: any) {
        return createUserDto
    }

    @Patch(':id')
    async updateUser(@Body() updateUserDto: any, @Param("id") id: string){
        return { id, updateUserDto }
    }

    @Delete(':id')
    async removeUser(@Param("id") id: string){
        return { id }
    }
}
