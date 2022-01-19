import { listRecords } from '../local-nosql';
import { assetRt } from '../models/base-asset';

export async function main() {
  const records = await listRecords();
  const data = records.map(record => assetRt.check(record));
  console.log(data);
}

main();
