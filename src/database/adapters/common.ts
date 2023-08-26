import { LokiAdapterOptions } from '@nozbe/watermelondb/adapters/lokijs';
import { SQLiteAdapterOptions } from '@nozbe/watermelondb/adapters/sqlite/type';

import schema from '../model/schema';

export const common: SQLiteAdapterOptions & LokiAdapterOptions = {
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  // jsi: true /* Platform.OS === 'ios' */,
  // (optional, but you should implement this method)
  onSetUpError: err => {
    console.error(err.message);
  },
};
