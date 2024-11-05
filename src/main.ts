import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // get app config for cors serttings and starting the app.
  const appConfig: AppConfigService = app.get(AppConfigService)

  await app.listen(appConfig.port, () => console.log(`Asset service is running on: `, {
    host: appConfig.serviceHost,
    port: appConfig.servicePort
  }));
}

bootstrap();
