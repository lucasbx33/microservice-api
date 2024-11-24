import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: { email: string; firstname: string; lastname: string; birthDate: Date; phoneNumber: string }) {
    return this.prisma.user.create({ data });
  }

  async updateUser(
    id: number,
    data: Partial<{ email: string; firstname: string; lastname: string; birthDate: Date; phoneNumber: string }>,
  ) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
