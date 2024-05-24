import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from "./firebase-config";
import { UserContext } from "../../App";
import ContinueLogin from "./ContinueLogin";
const Login = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let btnName= "Sign In";
  let btnClass = "text-white border border-gray-400 rounded-md p-2 hover:bg-blue-400 hover:text-black flex justify-end items-end sm:text-sm md:text-sm text-sm lg:text-base transform duration-100 font-mono hover:scale-105 hover:border-transparent";
  let btnRename = false;
  if (props.from === "continueLogin") {
    btnName = "Sign In With Google";
    btnClass ="btn glass hover:bg-black  text-white-500 bg-blue-500 rounded-full";
  }
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const handleGoogleSignIn = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const { displayName, email, photoURL } = user;
        console.log(user);
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          success: true,
        };
        setLoggedInUser(signedInUser);
        setUserToken();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    const setUserToken = () => {
      auth.currentUser
        .getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem("token", idToken);
          // ...
        })
        .catch(function (error) {
          // Handle error
        });
    };
  };

  return (
    <div>
     
      <button
        onClick={handleGoogleSignIn}
        className={btnClass}
      >
       {loggedInUser.name?loggedInUser.name:btnName}
      </button>
    </div>
  );
};

export default Login;
