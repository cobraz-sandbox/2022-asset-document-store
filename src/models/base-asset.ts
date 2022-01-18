import * as rt from 'runtypes';

export const assetRt = rt.Record({
  name: rt.String,
  description: rt.String.optional(),
  serialNumber: rt.String.optional(),
});
