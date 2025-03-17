import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contactsSlice";
import { contactsFilterReducers } from "./filtersSlice";



export const store = configureStore({
  reducer: {
    contacts: contactsReducers, // Correct reducer key and persisted reducer
    contactsFilter: contactsFilterReducers,
  },

    
});
