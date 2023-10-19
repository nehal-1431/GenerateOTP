import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '../actions/otpAction';

const withOTPVerification = (WrappedComponent) => {
  const Wrapper = (props) => {
    const otp = useSelector((state) => state.OTP.otp);
    const isVerified = useSelector((state) => state.OTP.isVerified);
    const dispatch = useDispatch();

    const VerifyOTP = (input) => {
        dispatch(verifyOTP(input))
    }

    return <WrappedComponent {...props} otp={otp} isVerified={isVerified}  VerifyOTP = {VerifyOTP}/>;
  };

  return Wrapper;
};

export default withOTPVerification;
