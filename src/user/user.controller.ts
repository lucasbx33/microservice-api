import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { email: string; firstname: string; lastname: string; birthDate: string; phoneNumber: string }) {
    return this.userService.createUser({ ...body, birthDate: new Date(body.birthDate) });
  }

  @Put(':id')
    async updateUser(
      @Param('id') id: string,
      @Body() body: Partial<{ email: string; firstname: string; lastname: string; birthDate: string; phoneNumber: string }>,
    ) {
      const data = {
        ...body,
        birthDate: body.birthDate ? new Date(body.birthDate) : undefined, // Convertit la string en Date
      };
      return this.userService.updateUser(Number(id), data);
    }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
