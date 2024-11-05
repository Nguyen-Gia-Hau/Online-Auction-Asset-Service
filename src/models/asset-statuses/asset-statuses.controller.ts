import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AssetStatusesService } from './asset-statuses.service';
import { CreateAssetStatusDto } from './dto/create-asset-status.dto';
import { UpdateAssetStatusDto } from './dto/update-asset-status.dto';

@Controller()
export class AssetStatusesController {
  constructor(private readonly assetStatusesService: AssetStatusesService) { }

  @Post()
  create(@Body() createAssetStatusDto: CreateAssetStatusDto) {
    return this.assetStatusesService.create(createAssetStatusDto);
  }

  @Get()
  findAll() {
    return this.assetStatusesService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.assetStatusesService.findOne(id);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() updateAssetStatusDto: UpdateAssetStatusDto) {
    return this.assetStatusesService.update(id, updateAssetStatusDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.assetStatusesService.remove(id);
  }
}
