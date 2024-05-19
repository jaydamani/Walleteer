import { categories } from './categories';
import { Database } from '@nozbe/watermelondb';
import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync';
import { tr } from 'react-native-paper-dates';

const data: SyncDatabaseChangeSet = {
  categories: {
    created: categories,
    updated: [],
    deleted: [],
  },
  transactions: {
    created: [],
    updated: [],
    deleted: [],
  }
};

export function firstSync(database: Database) {
  return synchronize({
    database,
    async pullChanges({ lastPulledAt }) {
      if (lastPulledAt) return { changes: {}, timestamp: lastPulledAt };
      return { changes: data, timestamp: Date.now() };
    },
  });
}
