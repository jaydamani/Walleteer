import { Collection, Database as Watermelondb } from '@nozbe/watermelondb';
import { Category } from './categories';
import { Transaction } from './transaction';

const collection: PropertyDecorator = function (
  target: any,
  key: string | symbol,
): PropertyDescriptor {
  if (typeof key === 'symbol') {
    throw new Error('Symbol is not supported');
  }
  return {
    get: function () {
      const db: Database = this as any;
      return db.get(key);
    },
    configurable: false,
  };
};

export class Database extends Watermelondb {
  @collection transactions!: Collection<Transaction>;
  @collection categories!: Collection<Category>;
}
