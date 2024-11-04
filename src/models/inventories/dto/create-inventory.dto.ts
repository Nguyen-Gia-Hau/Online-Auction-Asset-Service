
import { IsNotEmpty, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateInventoryDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsDateString()
  @IsNotEmpty()
  entryTime: Date;

  @IsDateString()
  @IsOptional()
  exitTime?: Date;

  @IsNumber()
  @IsNotEmpty()
  warehouseID: number;

  @IsNumber()
  @IsNotEmpty()
  assetID: number;
}

