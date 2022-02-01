import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBService } from './db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dbService: DBService = app.get(DBService);
  dbService.enableShutdownHooks(app)
  await app.listen(3000);
}
bootstrap();
