import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AssetTypesService } from './asset-types.service';
import { CreateAssetTypeDto } from './dto/create-asset-type.dto';
import { UpdateAssetTypeDto } from './dto/update-asset-type.dto';

@Controller()
export class AssetTypesController {
  constructor(private readonly assetTypesService: AssetTypesService) { }

  @MessagePattern({ cmd: 'asset-types', action: 'create' })
  create(@Payload() createAssetTypeDto: CreateAssetTypeDto) {
    return this.assetTypesService.create(createAssetTypeDto);
  }

  @MessagePattern({ cmd: 'asset-types', action: 'findAll' })
  findAll() {
    return this.assetTypesService.findAll();
  }

  @MessagePattern({ cmd: 'asset-types', action: 'findOne' })
  findOne(@Payload() id: number) {
    return this.assetTypesService.findOne(id);
  }

  @MessagePattern({ cmd: 'asset-types', action: 'update' })
  update(@Payload() updateAssetTypeDto: UpdateAssetTypeDto) {
    return this.assetTypesService.update(updateAssetTypeDto.id, updateAssetTypeDto);
  }

  @MessagePattern({ cmd: 'asset-types', action: 'remove' })
  remove(@Payload() id: number) {
    return this.assetTypesService.remove(id);
  }
}
