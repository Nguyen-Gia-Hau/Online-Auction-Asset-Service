import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) { }

  @MessagePattern({ cmd: 'warehouse', action: 'create' })
  create(@Payload() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }


  @MessagePattern({ cmd: 'warehouse', action: 'findAll' })
  findAll() {
    return this.warehouseService.findAll();
  }

  @MessagePattern({ cmd: 'warehouse', action: 'findOne' })
  findOne(@Payload() id: number) {
    return this.warehouseService.findOne(id);
  }

  @MessagePattern({ cmd: 'warehouse', action: 'update' })
  update(@Payload() updateWarehouseDto: UpdateWarehouseDto) {
    return this.warehouseService.update(updateWarehouseDto.id, updateWarehouseDto);
  }

  @MessagePattern({ cmd: 'warehouse', action: 'remove' })
  remove(@Payload() id: number) {
    return this.warehouseService.remove(id);
  }
}
