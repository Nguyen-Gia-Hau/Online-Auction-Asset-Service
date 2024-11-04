import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AssetsService } from './assets.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller()
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) { }


  @MessagePattern({ cmd: 'asset', action: 'create' })
  create(@Payload() createAssetDto: CreateAssetDto) {
    return this.assetsService.create(createAssetDto);
  }


  @MessagePattern({ cmd: 'asset', action: 'findAll' })
  findAll() {
    return this.assetsService.findAll();
  }

  @MessagePattern({ cmd: 'asset', action: 'findOne' })
  findOne(@Payload() id: number) {
    return this.assetsService.findOne(id);
  }

  @MessagePattern({ cmd: 'asset', action: 'update' })
  update(@Payload() updateAssetDto: UpdateAssetDto) {
    return this.assetsService.update(updateAssetDto.id, updateAssetDto);
  }

  @MessagePattern({ cmd: 'asset', action: 'remove' })
  remove(@Payload() id: number) {
    return this.assetsService.remove(id);
  }
}
