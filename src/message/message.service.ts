import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async createMessage(data: { subject: string; body: string; toSend: boolean }) {
    return this.prisma.message.create({ data });
  }

  async updateMessage(id: number, data: Partial<{ subject: string; body: string; toSend: boolean }>) {
    return this.prisma.message.update({ where: { id }, data });
  }

  async getAllMessages() {
    return this.prisma.message.findMany();
  }

  async deleteMessage(id: number) {
    return this.prisma.message.delete({ where: { id } });
  }
}
