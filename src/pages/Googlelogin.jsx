import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NewFile from "./NewFile";

const GoogleLogin = () => {
  const clientId ="inter client Id"
    

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <NewFile />
    </GoogleOAuthProvider>
  );
};

export default GoogleLogin;

