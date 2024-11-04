import { IsNotEmpty, IsString } from "class-validator";

export class CreateWarehouseDto {
  @IsString()
  @IsNotEmpty()
  location: string;
}
