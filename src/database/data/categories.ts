import { CategorySchema, CategoryType } from '../model/categories';

export const categories: CategorySchema[] = [
  {
    id: 'salary',
    title: 'Salary',
    type: CategoryType.INCOME,
  },
  {
    id: 'sale',
    title: 'Sale',
    type: CategoryType.INCOME,
  },
  {
    id: 'prize',
    title: 'Prize',
    type: CategoryType.INCOME,
  },
  {
    id: 'other',
    title: 'Other',
    type: CategoryType.BOTH,
  },
  {
    id: 'investments',
    title: 'Investments',
    type: CategoryType.BOTH,
  },
  {
    id: 'gifts',
    title: 'Gift',
    type: CategoryType.BOTH,
  },
  {
    id: 'food_drinks',
    title: 'Food/Drinks',
    type: CategoryType.EXPENSE,
  },
  {
    id: 'vehicle',
    title: 'Vehicle',
    type: CategoryType.EXPENSE,
  },
  {
    id: 'basics',
    title: 'Basics',
    type: CategoryType.EXPENSE,
  },
  {
    id: 'travel',
    title: 'Travel',
    type: CategoryType.EXPENSE,
  },
  {
    id: 'entertainment',
    title: 'Entertainment',
    type: CategoryType.EXPENSE,
  }

];
