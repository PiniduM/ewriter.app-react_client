import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import FormBase from "../../../components/FormBase.js";

import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const uNameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmPwdRef = useRef();

  const [validUname, setValidUname] = useState(false);
  const [validemail, setValidemail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdConfirmed, setPwdConfirmed] = useState(undefined);

  const handleUsername = () => {
    const usernameRegex = /^(?=.*\d)(?=.*[a-z])[a-zA-Z\d]{6,20}$/;

    if (usernameRegex.test(uNameRef.current.value)) {
      setValidUname(true);
      console.log("uname valid");
    } else {
      setValidUname(false);
      console.log("username invalid");
    }
  };

  const handleemail = () => {
    const emailRegex =
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (emailRegex.test(emailRef.current.value)) {
      setValidemail(true);
      console.log("email valid");
    } else {
      setValidemail(false);
      console.log("email invalid");
    }
  };

  const handlePwd = () => {
    const pwdRegex = /^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,25}$/;

    if (pwdRegex.test(pwdRef.current.value)) {
      setValidPwd(true);
      console.log("password valid");
    } else {
      setValidPwd(false);
      console.log("password invalid");
    }
    if (pwdConfirmed === undefined) {
      console.log("havent done confirmission yet");
      return;
    }
    handleConfirmPwd();
  };

  console.log(validPwd);

  const handleConfirmPwd = () => {
    if (validPwd && pwdRef.current.value === confirmPwdRef.current.value) {
      console.log("pwd confiremed");
      setPwdConfirmed(true);
    } else {
      console.log("pwd don't match");
      setPwdConfirmed(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUsername();
    handleemail();
    handlePwd();
    handleConfirmPwd();

    const user = {
      email: emailRef.current,
      userName: uNameRef.current,
      password: pwdConfirmed.current,
    };
  };

  return (
    <FormBase>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.topic}>Register</h1>
        <div
          className={`${classes.inputBlock} ${
            validemail ? classes.validEmail : classes.inValidEmail
          }`}
        >
          <label
            htmlFor="email"
            className={`${classes.emailInputLable} ${classes.inputLable}`}
          >
            email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            ref={emailRef}
            onBlur={handleemail}
            className={`${classes.emailInput} ${classes.txtInput}`}
          />
          <p className={classes.emailWarning}>
            Please enter a valid email address
          </p>
        </div>
        <div
          className={`${classes.inputBlock} ${classes.uNameInputBlock} ${
            validUname ? classes.validUname : classes.inValidUname
          }`}
        >
          <label
            htmlFor="username"
            className={`${classes.txtInputLable} ${classes.inputLable}`}
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            ref={uNameRef}
            onBlur={handleUsername}
            className={`${classes.uNameInput} ${classes.txtInput}`}
          />
          <p className={classes.uNameWarning}>
            Please enter a valid username which contains 6-20 characters
            including at least a letter and a number
          </p>
        </div>
        <div
          className={`${classes.inputBlock} ${
            validPwd ? classes.validPwd : classes.inValidPwd
          }`}
        >
          <label
            htmlFor="pwd"
            className={`${classes.pwdInputLable} ${classes.inputLable}`}
          >
            Password:
          </label>
          <input
            type="password"
            id="pwd"
            name="pwd"
            required
            autoComplete="off"
            ref={pwdRef}
            onBlur={handlePwd}
            className={`${classes.pwdInput} ${classes.txtInput}`}
          />
          <p className={classes.pwdWarning}>
            Please enter a valid password which contains 6-25 characters
            including atleast a letter and a number
          </p>
        </div>
        <div
          className={`${classes.inputBlock} ${
            pwdConfirmed ? classes.pwdConfirmed : classes.pwdNotConfirmed
          }`}
        >
          <label
            htmlFor="confirmPwd"
            className={`${classes.confirmPwdLable} ${classes.inputLable}`}
          >
            confirm Password:
          </label>
          <input
            type="password"
            id="confirmPwd"
            name="confirmPwd"
            required
            autoComplete="off"
            ref={confirmPwdRef}
            onBlur={handleConfirmPwd}
            className={`${classes.confirmPwdInput} ${classes.txtInput}`}
          />
          <p className={classes.confirmPwdWarning}>Passwords do not match!</p>
        </div>
        <div className={classes.submitRow}>
          <input type="submit" value="Register" className={classes.submitBtn} />
          <p>
            Alredy have a account? <Link to="/login">login</Link>
          </p>
        </div>
      </form>
    </FormBase>
  );
};

export default RegisterForm;
