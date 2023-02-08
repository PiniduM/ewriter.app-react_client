import  axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./GmailVerifier.module.css";

const GmailVerifier = () => {
  const gmail = Cookies.get("verifying_gmail");
  const navigate = useNavigate();

  const [verificationCode,setVerificationCode] =useState('');
  const [displayWarning,setDisplayWarning] = useState(false);


  const handleChange = (e) =>  {
    setVerificationCode(e.target.value);
  }


  const handleResend = () => {
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const sixDigitRegex = /^\d{6}$/;
    if(!sixDigitRegex.test(verificationCode)) {
      setDisplayWarning(true);
      console.log("otp invalid");
      return;
    }
    setDisplayWarning(false);
    console.log("done");
    axios.post("http://localhost:5001/ewriter/verifygmail",{gmail,verificationCode})
    .then(result => {
      console.log(result);
      Cookies.remove("verifying_gmail");
      navigate("/login");
    })
    .catch(err => console.log(err));

  }


  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Verify your gmail address</h1>
      <p className={classes.instruction}>
        A six digit verification code has sent to&nbsp;
        <span className={classes.gmail}>{gmail}</span>,<br />
        enter that code to verify your gmail address
      </p>
      {/* implement the splitted otp input when completed*/}
      <form className={classes.form} onSubmit={e => handleSubmit(e)}>
      <input
      type="text"
      maxLength="6"
      value={verificationCode}
      placeholder="code"
      className={classes.otpInput}
      onChange={e => handleChange(e)}
      />
      {displayWarning ? <p className={classes.warning}>Invalid verification code</p> : <p className={classes.noWarning}>valid verification code</p>}
      <button className={classes.verifyButton}>Verify</button>
      <p className={classes.resendLink} onClick={handleResend}>Resend a verification code</p>
      </form>
    </div>
  );
};

export default GmailVerifier;
