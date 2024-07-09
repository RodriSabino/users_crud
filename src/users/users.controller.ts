import { Controller, Get, HttpCode, Param, Post, Patch, Body, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll() {
        return await this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param("id") id: string) {
        return await this.usersService.findById(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.createUser(createUserDto);
    }

    @Patch(':id')
    async updateUser(@Body() updateUserDto: any, @Param("id") id: string){
        return { id, updateUserDto }
    }

    @Delete(':id')
    async deleteById(@Param("id") id: string){
        return { id }
    }
}
