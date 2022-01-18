import { ComputerAsset } from '../models/computer';
import { BananaAsset } from '../models/banana';
import { addRecord, connectToRedis } from '../local-nosql';

export async function main() {
  await Promise.all([
    addRecord<ComputerAsset>({
      name: 'Kalle',
      kind: 'computer-asset',
      cpuType: 'Pentium 100',
      memory: '128mb',
    }),
    addRecord<BananaAsset>({
      name: 'Banana',
      kind: 'banana-asset',
      color: 'yellow',
    }),
  ]);
}

main();
