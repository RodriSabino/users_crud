import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{name: 'John Doe', id: '1'}];
    async findAll() {
        return this.users;
    }
}
