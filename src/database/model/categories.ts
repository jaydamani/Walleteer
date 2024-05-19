import { ColumnList } from '@lib/types';
import { Model, tableSchema } from '@nozbe/watermelondb';
import { text } from '@nozbe/watermelondb/decorators';

export interface CategorySchema {
  id: string;
  title: string;
  type: CategoryType;
}

export enum CategoryType {
  INCOME,
  EXPENSE,
  BOTH,
}

const columns: ColumnList<CategorySchema> = [
  { name: 'title', type: 'string' },
  { name: 'type', type: 'string' },
];
export const CategorySchema = tableSchema({
  name: 'categories',
  columns,
});

export class Category extends Model {
  static table = 'categories';
  @text('title') title!: string;
}
