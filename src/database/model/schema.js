import { appSchema } from '@nozbe/watermelondb';

import { CategorySchema } from './categories';
import { TransactionSchema } from './transaction';

export default appSchema({
  version: 1,
  tables: [CategorySchema, TransactionSchema],
});
