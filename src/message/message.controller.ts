import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createMessage(@Body() body: { subject: string; body: string; toSend: boolean }) {
    return this.messageService.createMessage(body);
  }

  @Patch(':id')
  async updateMessage(@Param('id') id: string, @Body() body: Partial<{ subject: string; body: string; toSend: boolean }>) {
    return this.messageService.updateMessage(Number(id), body);
  }

  @Get()
  async getAllMessages() {
    return this.messageService.getAllMessages();
  }

  @Delete(':id')
  async deleteMessage(@Param('id') id: string) {
    return this.messageService.deleteMessage(Number(id));
  }
}
