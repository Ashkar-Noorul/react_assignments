import React, { useState } from "react";
import OTPInput from "./OTPInput";

const OTPLogin = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submtited OTP: ", otp);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <h2>OTP Login</h2>
      <form onSubmit={handleSubmit}>
        <OTPInput length={6} onChange={handleOtpChange} />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTPLogin;
