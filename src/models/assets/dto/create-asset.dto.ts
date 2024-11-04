
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsBoolean, IsDateString } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  assetName: string;

  @IsString()
  @IsNotEmpty()
  mainImage: string;

  @IsString()
  @IsNotEmpty()
  assetDescription: string;

  @IsNumber()
  @IsNotEmpty()
  assetPrice: number;

  @IsNumber()
  @IsNotEmpty()
  inspectorID: number;

  @IsString()
  @IsNotEmpty()
  assetTypeID: number;

  @IsNumber()
  @IsNotEmpty()
  assetStatusID: number;
}

