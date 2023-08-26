import { categories } from '@database';
import { CategoryID } from '@lib/constants';
import { Q } from '@nozbe/watermelondb';

export async function createCategories() {
  const exists = await categories
    .query(Q.where('id', CategoryID.TEST))
    .fetchCount();

  if (!exists) {
    return categories.create(c => {
      c.title = 'test';
      c._raw.id = CategoryID.TEST;
      return c;
    });
  }
}
