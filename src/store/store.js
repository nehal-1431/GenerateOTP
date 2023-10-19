import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/otpReducer';

const store = configureStore({
    reducer : {
        OTP : reducer
    }
});

export default store;
