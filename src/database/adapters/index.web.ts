import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';

import { common } from './common';

export default new LokiJSAdapter({
  ...common,
  useWebWorker: false,
  useIncrementalIndexedDB: true,

  // --- Optional, but recommended event handlers:

  onQuotaExceededError: error => {
    // Browser ran out of disk space -- offer the user to reload the app or log out
    console.error(error);
  },
  extraIncrementalIDBOptions: {
    onDidOverwrite: () => {
      // Called when this adapter is forced to overwrite contents of IndexedDB.
      // This happens if there's another open tab of the same app that's making changes.
      // Try to synchronize the app now, and if user is offline, alert them that if they close this
      // tab, some data may be lost
    },
    onversionchange: () => {
      // database was deleted in another browser tab (user logged out), so we must make sure we delete
      // it in this tab as well - usually best to just refresh the page
      // window.location.reload();
    },
  },
});
