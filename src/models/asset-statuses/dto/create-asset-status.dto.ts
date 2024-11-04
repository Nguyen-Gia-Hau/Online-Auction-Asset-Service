import { IsNotEmpty, IsString } from "class-validator";

export class CreateAssetStatusDto {
  @IsNotEmpty()
  @IsString()
  assetStatusName: string;
}
