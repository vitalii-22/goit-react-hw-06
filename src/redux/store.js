import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducer } from "./contactsSlice";
import { filtersSliceReducer } from "./filtersSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
  //   blacklist: ['contacts', "isError", "isLoading", "productData"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsSliceReducer),
    filters: filtersSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
