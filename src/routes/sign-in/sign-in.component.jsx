import { SignInWithGooglePopup, SignInWithGoogleRedirect, auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => { 

    const FetchData = async () => {
      console.log(`Here`)
      const response = await getRedirectResult(auth);
      console.log(`Response : ${response}`)
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    }

    FetchData().catch(console.error);

    

  }, []);


    const logGoogleUser = async () => {
        const {user} = await SignInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        
    }

    return (
       <div>
            <h1>Login Page</h1>
            <button onClick={logGoogleUser}>Sign in with google</button>
            <button onClick={SignInWithGoogleRedirect}>Sign in with google Redirect</button>

       </div>
    )
  }

export default SignIn;