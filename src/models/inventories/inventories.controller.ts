import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InventoriesService } from './inventories.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Controller()
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) { }


  @MessagePattern({ cmd: 'inventories', action: 'create' })
  create(@Payload() createInventoryDto: CreateInventoryDto) {
    return this.inventoriesService.create(createInventoryDto);
  }

  @MessagePattern({ cmd: 'inventories', action: 'findAll' })
  findAll() {
    return this.inventoriesService.findAll();
  }

  @MessagePattern({ cmd: 'inventories', action: 'findOne' })
  findOne(@Payload() id: number) {
    return this.inventoriesService.findOne(id);
  }

  @MessagePattern({ cmd: 'inventories', action: 'update' })
  update(@Payload() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoriesService.update(updateInventoryDto.id, updateInventoryDto);
  }

  @MessagePattern({ cmd: 'inventories', action: 'remove' })
  remove(@Payload() id: number) {
    return this.inventoriesService.remove(id);
  }
}
