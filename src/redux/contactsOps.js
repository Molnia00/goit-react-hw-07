import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://67d6ef009d5e3a1015296f34.mockapi.io/';


export const contactThunk = createAsyncThunk('contacts/contactThunk',
    async (body, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    });



export const deleteThunk = createAsyncThunk('contacts/deleteItems',
    async (id, thunkAPI) => {
        try {
        const { data } = await axios.delete(`/contacts/${id}`);
            return data;
            
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)   

export const addThunk = createAsyncThunk('contacts/addItems',
    async (body, thunkAPI) => {
        try {
        const { data } = await axios.post('contacts', body);
            return data;
            
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    }
)   