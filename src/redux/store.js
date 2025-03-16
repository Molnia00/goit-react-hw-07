import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contactsSlice";
import { contactsFilterReducers } from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsReducers); // Persist contactsReducers

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Correct reducer key and persisted reducer
    contactsFilter: contactsFilterReducers,
  },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)