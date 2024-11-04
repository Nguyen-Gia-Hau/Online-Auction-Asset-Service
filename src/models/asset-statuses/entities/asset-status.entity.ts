import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AssetStatus {
  @PrimaryGeneratedColumn()
  assetStatusID: number;

  @Column()
  assetStatusName: string;

  @Column({ default: false, nullable: false })
  delflag: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

}
