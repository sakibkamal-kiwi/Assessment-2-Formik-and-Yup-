import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
const NewFile = () => {
  //const clientId = "621223062560-nhues3mo6f3c8ku0ltbt7bq2s6mblugj.apps.googleusercontent.com"

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="button-edit">
      <button onClick={() => login()}>
        {" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeFXuETe6aECJ8vN583s_f098cHabyB_DvpAoR_rHzg&s"
          alt="kiwilogo"
        />
        Login with Kiwitech Email
      </button>
    </div>
  );
};

export default NewFile;
