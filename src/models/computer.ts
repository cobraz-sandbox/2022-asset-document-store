import * as rt from 'runtypes';
import { assetRt } from './base-asset';

export const computerAssetRt = rt
  .Record({
    kind: rt.Literal('computer-asset'),
    cpuType: rt.String,
    memory: rt.String,
  })
  .And(assetRt);

export type ComputerAsset = rt.Static<typeof computerAssetRt>;
