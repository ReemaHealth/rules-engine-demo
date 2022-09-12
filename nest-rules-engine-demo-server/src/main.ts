import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const whitelist = ['http://localhost:3004'];

  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Request rejected by CORS'));
      }
    },
  });
  await app.listen(3000);
}
bootstrap();
