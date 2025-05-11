import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitAPI = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

const setAuthNavigation = token => {
    goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthNavigation = () => {
    goitAPI.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk('auth/register', async(body, thunkAPI) => {
    try {
        const response = await goitAPI.post('/users/signup', body);
        setAuthNavigation(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});


export const loginThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await goitAPI.post('/users/login', body);
        setAuthNavigation(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});
 
export const logoutThunk = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
        await goitAPI.post('/users/logout');
        removeAuthNavigation();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
});
export const refreshUserThunk = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token;
        console.log(savedToken);
        if (!savedToken) {
            return thunkAPI.rejectWithValue('Token is not exist');
        }

        setAuthNavigation(savedToken);
        const response = await goitAPI.get('/users/current');
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
});

