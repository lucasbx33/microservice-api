import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';
import { LogModule } from './log/log.module';
import { PrismaService } from './prisma/prisma.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JwtValidationService } from './auth/jwt-validation.service';

@Module({
  imports: [UserModule, MessageModule, LogModule],
  providers: [PrismaService, JwtValidationService, JwtAuthGuard],
  
})
export class AppModule {}
