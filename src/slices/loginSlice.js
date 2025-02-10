import { postLogin } from "../api/accountApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const { Cookies } = require("react-cookie");

const cookies = new Cookies();

const initialState = JSON.parse(sessionStorage.getItem("user")) || {
    username: "",
    roles: "",
};

export const postLoginAsyncThunk = createAsyncThunk("postLoginAsyncThunk", (param) => {
    return postLogin(param)
})

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialState,
    reducers: {
        logout: (state, action) => {
            cookies.remove("JSSESIONID", "/admin/login");
            sessionStorage.removeItem("user");
            return { ...initialState }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postLoginAsyncThunk.pending, (state, action) => {

            })
            .addCase(postLoginAsyncThunk.fulfilled, (state, action) => {
                state.username = action.payload.username;
                state.roles = action.payload.roles;
                sessionStorage.setItem("user", JSON.stringify(state));
            })
            .addCase(postLoginAsyncThunk.rejected, (state, action) => {

            })
    }
})

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;