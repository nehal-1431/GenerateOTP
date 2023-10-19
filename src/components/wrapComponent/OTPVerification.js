import React  from 'react';
import { useDispatch } from 'react-redux';
import { generateOTP } from '../../actions/otpAction';
import withOTPVerification from '../../hoc/withOtpVerification';
import ButtonComponent from '../baseComponents/ButtonComponent';
import OTPComponent from '../baseComponents/OTPComponent';


const OTPVerification = ({ otp, isVerified, VerifyOTP}) => {

  const dispatch = useDispatch();

  const handleGenerateOTP = () => {
    dispatch(generateOTP());
  };


  return (
    <div>
      <ButtonComponent btnClick={handleGenerateOTP} ButtonText='Generate OTP' ButtonName='generate' variant='info'/>
      <OTPComponent handleVerifyOTP={VerifyOTP} otp={otp} isVerified={isVerified}/>
    </div>
  );
};

export default withOTPVerification(OTPVerification);
