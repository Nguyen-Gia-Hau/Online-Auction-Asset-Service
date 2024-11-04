import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { MariadbDatabaseProviderModule } from './providers/database/mariadb/provider.module';
import { AssetTypesModule } from './models/asset-types/asset-types.module';
import { AssetStatusesModule } from './models/asset-statuses/asset-statuses.module';

@Module({
  imports: [
    AppConfigModule,
    MariadbDatabaseProviderModule,
    AssetTypesModule,
    AssetStatusesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
