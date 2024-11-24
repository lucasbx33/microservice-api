import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JwtValidationService } from './auth/jwt-validation.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const jwtValidationService = app.get(JwtValidationService);
  app.useGlobalGuards(new JwtAuthGuard(jwtValidationService));

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
