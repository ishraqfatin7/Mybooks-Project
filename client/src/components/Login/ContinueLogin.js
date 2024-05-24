import React from "react";
import authenticationBG from "../../images/undraw_authentication.svg";
import Login from "./Login";
const ContinueLogin = (props) => {
    console.log(props);
  return (
    <div className="bg-white ">
      <div className="flex items-center h-screen w-full px-4 py-10 bg-cover bg-base-200">
        <div className="card glass lg:card-side text-neutral-content">
         
            <img src={authenticationBG} className="rounded-lg shadow-lg lg:w-1/2" />
         
          <div className="max-w-md card-body">
            <h2 className="card-title">Sorry! You are not Logged In!</h2>
            <p>
             We value your time. That's why we moved from traditional sign up system to one Click Login
            </p>
            <div className="card-actions">
              {/* <button className="btn glass hover:bg-black  text-white-500 bg-blue-500 rounded-full" onClick={props.handleGoogleSignIn}>Login With Google</button> */}
              <Login from ={"continueLogin"}></Login>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueLogin;
