import { ColumnSchema } from '@nozbe/watermelondb';

export type ColumnList<T> = (ColumnSchema & {
  name: keyof T;
})[];
