import { createSlice } from "@reduxjs/toolkit";
import { addThunk, contactThunk, deleteThunk } from "./contactsOps";

const initialState = {
    items: [],
	isLoading: 'false',
    isError: null
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(contactThunk.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        })
            .addCase(contactThunk.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
            })
            
        .addCase(contactThunk.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
                              
        })
            .addCase(deleteThunk.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id )

            })
            .addCase(addThunk.fulfilled, (state, action) => {
            state.items.push(action.payload)
            })
        
    }
})
    

export const contactsReducers = slice.reducer;
export const { addContacts, errorThing, lodingThing, deleteContacts } = slice.actions;
export const contSelect = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading ;
export const selectRejected = state => state.contacts.isError ;
