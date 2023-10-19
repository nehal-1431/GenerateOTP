import { GENERATE_OTP, VERIFY_OTP } from '../types/otpTypes';

export const generateOTP = () => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP
  return {
    type: GENERATE_OTP,
    payload: otp,
  };
};

export const verifyOTP = (otp) => {
  return {
    type: VERIFY_OTP,
    payload: otp,
  };
};
