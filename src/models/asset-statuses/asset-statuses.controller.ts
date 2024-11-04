import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AssetStatusesService } from './asset-statuses.service';
import { CreateAssetStatusDto } from './dto/create-asset-status.dto';
import { UpdateAssetStatusDto } from './dto/update-asset-status.dto';

@Controller()
export class AssetStatusesController {
  constructor(private readonly assetStatusesService: AssetStatusesService) { }

  @MessagePattern({ cmd: 'asset-statuses', action: 'create' })
  create(@Payload() createAssetStatusDto: CreateAssetStatusDto) {
    return this.assetStatusesService.create(createAssetStatusDto);
  }

  @MessagePattern({ cmd: 'asset-statuses', action: 'findAll' })
  findAll() {
    return this.assetStatusesService.findAll();
  }

  @MessagePattern({ cmd: 'asset-statuses', action: 'findOne' })
  findOne(@Payload() id: number) {
    return this.assetStatusesService.findOne(id);
  }

  @MessagePattern({ cmd: 'asset-statuses', action: 'update' })
  update(@Payload() updateAssetStatusDto: UpdateAssetStatusDto) {
    return this.assetStatusesService.update(updateAssetStatusDto.id, updateAssetStatusDto);
  }

  @MessagePattern({ cmd: 'asset-statuses', action: 'remove' })
  remove(@Payload() id: number) {
    return this.assetStatusesService.remove(id);
  }
}
