import { Controller, Post, Body } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('logs')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post()
  async createLog(@Body() body: { messageId: number; userId: number; status: string; sentAt: string }) {
    return this.logService.createLog({ ...body, sentAt: new Date(body.sentAt) });
  }
}
