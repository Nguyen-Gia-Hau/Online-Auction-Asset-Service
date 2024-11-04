import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { MariadbConfigModule } from "src/config/database/mariadb/config.module";
import { MariadbConfigService } from "src/config/database/mariadb/config.service";
import { AssetStatus } from "src/models/asset-statuses/entities/asset-status.entity";
import { AssetType } from "src/models/asset-types/entities/asset-type.entity";
import { Asset } from "src/models/assets/entities/asset.entity";
import { Inventory } from "src/models/inventories/entities/inventory.entity";
import { Warehouse } from "src/models/warehouse/entities/warehouse.entity";

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
          AssetType, AssetStatus, Warehouse, Asset, Inventory
        ],
        synchronize: true
      }),
      inject: [MariadbConfigService]
    } as TypeOrmModuleAsyncOptions)
  ]
})

export class MariadbDatabaseProviderModule {

}
