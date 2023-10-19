import { GENERATE_OTP, VERIFY_OTP } from '../types/otpTypes';

const initialState = {
  otp: null,
  isVerified: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_OTP:
      return {
        ...state,
        otp: action.payload,
      };
    case VERIFY_OTP:
      return {
        ...state,
        isVerified: state.otp == action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
