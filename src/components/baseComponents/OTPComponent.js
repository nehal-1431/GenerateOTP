import React,{ useState} from "react";
import ButtonComponent from "./ButtonComponent";

const OTPComponent = ({handleVerifyOTP, otp,isVerified}) => {

    const [OTP, setOTP] = useState('');
    const [verify, setVerify] = useState(false)

    const VerifyOTP = () => {
        setVerify(!verify);
        handleVerifyOTP(OTP);
    }


    return(
        <div>
                <h6 style={{margin:'10px'}}>OTP: {otp}</h6>
                <input type="text" value={OTP} onChange={(e)=>setOTP(e.target.value)} />
                {otp !== null ?
                <div style={{margin:'10px'}}>
                    <ButtonComponent btnClick={VerifyOTP} ButtonName='verify' ButtonText='Verify OTP' variant='success'/>
                </div>:""}
                {verify ?
                    isVerified ? 
                <p>OTP verified!</p> : <p>Wrong OTP Please Try Again</p>:''}
        </div>
    )
}

export default OTPComponent;