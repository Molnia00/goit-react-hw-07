import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "",
}


const slice = createSlice({
    name: 'contactsFilter',
    initialState,
    reducers: {
        searchItems: (state, action) => {
            state.filter = action.payload
        },
    }
})
    

export const contactsFilterReducers = slice.reducer;
export const { searchItems } = slice.actions;
export const contFilter = state => state.contactsFilter.filter;