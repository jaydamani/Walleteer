import { Category } from './model/categories';
import adapter from './adapters';
import { Database } from './model/database';
import { Transaction } from './model/transaction';
import { firstSync } from './data';

export const db = new Database({
  adapter,
  modelClasses: [Transaction, Category],
});
firstSync(db);

export { Transaction } from './model/transaction';
export { Category } from './model/categories';
