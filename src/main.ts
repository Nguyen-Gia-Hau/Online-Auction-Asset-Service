import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppConfigService } from './config/app/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig: AppConfigService = app.get(AppConfigService);

  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: appConfig.serviceHost,
        port: appConfig.servicePort
      }
    }
  );

  await microservice.listen();

  console.log(`Asset service is running on: `, {
    host: appConfig.serviceHost,
    port: appConfig.servicePort
  });
}

bootstrap();
