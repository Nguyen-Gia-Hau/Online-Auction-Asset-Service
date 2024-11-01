import { Module, OnModuleInit } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { MariadbConfigModule } from "src/config/database/mariadb/config.module";
import { MariadbConfigService } from "src/config/database/mariadb/config.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MariadbConfigModule],
      useFactory: async (mariadbConfigService: MariadbConfigService) => ({
        type: 'mariadb',
        host: mariadbConfigService.host,
        port: mariadbConfigService.port,
        username: mariadbConfigService.username,
        password: mariadbConfigService.password,
        database: mariadbConfigService.dbName,
        entities: [
          // ... All mysql based schemas/entities
        ],
        synchronize: true
      }),
      inject: [MariadbConfigService]
    } as TypeOrmModuleAsyncOptions)
  ]
})

export class MariadbDatabaseProviderModule {

}
