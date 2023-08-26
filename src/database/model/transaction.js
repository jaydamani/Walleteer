import { Model, tableSchema } from '@nozbe/watermelondb';
import { date, field, relation, text } from '@nozbe/watermelondb/decorators';

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
  @text('title') title;
  /**
   * @type {Date}
   */
  @date('done_at') date;
  @field('amount') amount;
  @text('icon') icon;
  /**
   * @type {Relation<Category>}
   */
  @relation('transaction_categories', 'category_id') category;

  get description() {
    return this.date.toDateString();
  }
}
