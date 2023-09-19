import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/actions/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';;

const URL_BACK = "https://mundogamer.onrender.com"
export default function Google() {
  const dispatch = useDispatch();
  const redirectToHome = useNavigate()
  const notify = () => toast("mmm algo salio mal 🤦‍♂️ ");
  const handleGoogleLoginSuccess = (credentialResponse) => {
    axios
      .post(`${URL_BACK}/google/login`, {
        token: credentialResponse.credential,
      })
      .then((response) => {
        dispatch(loginSuccess(response.data.user))
      
        if(response.data.user.rol === "admin"){
          window.location.href = "/admin";
        }
        if(response.data.user.rol === "user"){
          // window.location.href = "/Home";
          redirectToHome('/Home');
        }
      })
      .catch((error) => {
        console.error(error);
        notify()
        dispatch(loginFailure());
      });
  };

 

  const handleGoogleLoginError = () => {
    console.log("Login Failed");

    dispatch(loginFailure());
  };
  return (
    <div>
      <GoogleOAuthProvider clientId="969721067713-35smj5lvdi22tmq5joh9vr0g4ss55sg8.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
