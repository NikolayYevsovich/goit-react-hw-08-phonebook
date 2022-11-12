import { createSlice } from '@reduxjs/toolkit';
import { singup, login, logout, current } from '../Auth/auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
  isLoadingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [singup.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [singup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [singup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logout.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logout.fulfilled]: state => {
      state.loading = false;
      state.user = {};
      state.token = '';
      state.isLogin = false;
    },
    [logout.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [current.pending]: state => {
      state.isLoadingUser = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.user = payload;
      state.isLogin = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.isLoadingUser = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
