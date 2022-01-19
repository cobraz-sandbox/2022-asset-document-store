import * as v from 'class-validator';
import { plainToClass } from 'class-transformer';

export class BaseAsset {
  static make(data: unknown) {
    const asset = plainToClass(BaseAsset, data);
    if (!v.validate(asset)) {
      throw new Error('Nein!');
    }
    return asset;
  }
}

export class BananaAsset extends BaseAsset {
  @v.IsString()
  @v.IsCreditCard()
  kind: 'banana-asset';
  
  @v.IsString()
  color: 'yellow';
}

// validering
const dummedata = { kind: 'bana', color: 'yellow' };
const riktigData = BananaAsset.make(dummedata);
