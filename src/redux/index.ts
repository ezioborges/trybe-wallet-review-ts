import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import { loginReducer } from './reducers/loginReducer';

const store = configureStore({
  reducer: loginReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;