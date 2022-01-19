import fs from 'fs/promises';
import { randomUUID } from 'crypto';
import { join } from 'path';

const databaseDir = join(__dirname, '..', '.local-document-db');

export async function listRecords<Data = unknown>(): Promise<Data[]> {
  const files = await fs.readdir(databaseDir);

  return Promise.all(
    files
      .filter(file => file.includes('.json'))
      .map(async file => {
        const fileContent = await fs.readFile(join(databaseDir, file), 'utf-8');
        const data = JSON.parse(fileContent);
        return {
          id: file.replace('.json', ''),
          ...data,
        } as unknown as Data;
      }),
  );
}

export async function addRecord<Data = unknown>(data: Data) {
  const id = randomUUID();
  return fs.writeFile(
    join(databaseDir, `${id}.json`),
    JSON.stringify(data, null, 2),
  );
}
