import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc,getDoc,setDoc,getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCymxD2l2XYjrZmIMMO4wnUA1HdeMsRqTA",
  authDomain: "jd-clothing-db.firebaseapp.com",
  projectId: "jd-clothing-db",
  storageBucket: "jd-clothing-db.appspot.com",
  messagingSenderId: "656420490144",
  appId: "1:656420490144:web:645e58c9502afebaa532c5"
};


const firebaseApp = initializeApp(firebaseConfig);


const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);
export const SignInWithGoogleRedirect = () => signInWithRedirect(auth, GoogleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    console.log(userAuth);
    const userDocRef = doc(db, 'users', userAuth.uid);

    

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        }
        catch ( error ) {
            console.log('Eror creating user: ', error);
        }
    }

    return userDocRef
}