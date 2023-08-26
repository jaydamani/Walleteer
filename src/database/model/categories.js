import { Model, tableSchema } from '@nozbe/watermelondb';
import { text } from '@nozbe/watermelondb/decorators';

export const CategorySchema = tableSchema({
  name: 'categories',
  columns: [{ name: 'title', type: 'string' }],
});

export class Category extends Model {
  static table = 'categories';
  @text('title') title;
}
