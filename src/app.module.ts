import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { MariadbDatabaseProviderModule } from './providers/database/mariadb/provider.module';

@Module({
  imports: [
    AppConfigModule,
    MariadbDatabaseProviderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
