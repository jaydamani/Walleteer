import { Model, Relation, tableSchema } from '@nozbe/watermelondb';
import { date, field, relation, text } from '@nozbe/watermelondb/decorators';
import { Category } from './categories';

export const TransactionSchema = tableSchema({
  name: 'transactions',
  columns: [
    { name: 'title', type: 'string' },
    { name: 'done_at', type: 'number' },
    { name: 'amount', type: 'number' },
    { name: 'icon', type: 'string' },
    { name: 'category_id', type: 'string' },
  ],
});

export class Transaction extends Model {
  static table = 'transactions';
  @text('title') title!: string;
  @date('done_at') date!: Date;
  @field('amount') amount!: number;
  @text('icon') icon!: string;
  @relation('transaction_categories', 'category_id')
  category!: Relation<Category>;

  get description() {
    return this.date.toDateString();
  }
}
