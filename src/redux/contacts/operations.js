// import axios from "axios";
import {goitAPI} from '../auth/operations'
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await goitAPI.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }

);

export const addContact = createAsyncThunk('contacts/addContact',
    async ({name, number}, thunkAPI) => {
        try {
            const response = await goitAPI.post('/contacts', {name, number});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await goitAPI.delete(`/contacts/${id}`);
            return response.data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);