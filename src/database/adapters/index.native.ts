import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { common } from './common';

export default new SQLiteAdapter({
  ...common,
});
