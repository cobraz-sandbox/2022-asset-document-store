import * as rt from 'runtypes';
import { assetRt } from './base-asset';

export const bananaAssetRt = rt
  .Record({
    kind: rt.Literal('banana-asset'),
    color: rt.Literal('yellow'),
  })
  .And(assetRt);

export type BananaAsset = rt.Static<typeof bananaAssetRt>;
