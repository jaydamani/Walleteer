import { Model, Relation, tableSchema } from '@nozbe/watermelondb';
import { date, field, relation, text } from '@nozbe/watermelondb/decorators';
import { Category } from './categories';
import { ColumnList } from '@lib/types';

export enum TransactionType {
  INCOME,
  EXPENSE,
}

export interface transactionSChema {
  title: string;
  done_at: Date;
  amount: number;
  icon: string;
  category_id: string;
  type: TransactionType;
}

const columns: ColumnList<transactionSChema> = [
  { name: 'title', type: 'string' },
  { name: 'done_at', type: 'number' },
  { name: 'amount', type: 'number' },
  { name: 'icon', type: 'string' },
  { name: 'category_id', type: 'string' },
  { name: 'type', type: 'string' },
];

export const TransactionSchema = tableSchema({
  name: 'transactions',
  columns,
});

export class Transaction extends Model {
  static table = 'transactions';
  @text('title') title!: string;
  @date('done_at') date!: Date;
  @field('amount') amount!: number;
  @text('icon') icon!: string;
  @field('type') type!: TransactionType;
  @relation('transaction_categories', 'category_id')
  category!: Relation<Category>;

  get description() {
    return this.date.toDateString();
  }
}
