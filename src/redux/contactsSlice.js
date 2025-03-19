import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./contactsOps";
import { contFilter } from "./filtersSlice";

const initialState = {
    
    items: [],
	isLoading: false,
    isError: null,
    filter: '',
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
            .addCase(fetchContacts.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            
        .addCase(fetchContacts.pending, (state ) => {
                state.isLoading = true;
                state.isError = false;
                              
        })
            .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id )

            })
            .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
            })
        
        
    }
})

const selectContactsState = (state) => state.contacts;



export const contactsReducers = slice.reducer;
export const { addContacts, errorThing, lodingThing, deleteContacts } = slice.actions;


export const contSelect = createSelector(
  [selectContactsState, contFilter],
  (contacts, filter) => {
    if (contacts && contacts.items) {
      return contacts.items.filter(contact => contact.name.includes(filter));
    }
      return [];
  }
);
    
export const selectLoading = createSelector(
    [selectContactsState],
    (contacts) => contacts.isLoading
);
    

export const selectRejected = createSelector(
    [selectContactsState],
    (contacts) => contacts.isError
);

