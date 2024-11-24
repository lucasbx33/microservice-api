import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  async createLog(data: { messageId: number; userId: number; status: string; sentAt: Date }) {
    return this.prisma.log.create({ data });
  }
}
