import { Category } from '@models/categories';
import { Database } from '@nozbe/watermelondb';

import adapter from './adapters';
import { createCategories } from './init';
import { Transaction } from './model/transaction';

export const database = new Database({
  adapter,
  modelClasses: [Transaction, Category],
});

export function setupDB() {
  return database.write(async () => {
    try {
      await createCategories();
    } catch (error) {
      throw error;
    }
  });
}
export { Transaction } from './model/transaction';
export const transactions = database.get<Transaction>('transactions');
export { Category } from './model/categories';
export const categories = database.get<Category>('categories');
