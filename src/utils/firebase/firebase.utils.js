import { initializeApp } from "firebase/app";
import {
    signInWithEmailAndPassword,
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    collection,
    writeBatch,
    query,
    getDocs,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCymxD2l2XYjrZmIMMO4wnUA1HdeMsRqTA",
    authDomain: "jd-clothing-db.firebaseapp.com",
    projectId: "jd-clothing-db",
    storageBucket: "jd-clothing-db.appspot.com",
    messagingSenderId: "656420490144",
    appId: "1:656420490144:web:645e58c9502afebaa532c5",
};

const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const SignInWithGooglePopup = () =>
    signInWithPopup(auth, GoogleProvider);
export const SignInWithGoogleRedirect = () =>
    signInWithRedirect(auth, GoogleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((x) => {
        const title = x.title.toLowerCase();
        const docRef = doc(collectionRef, title);
        batch.set(docRef, x);
    });

    await batch.commit();
    console.log("done");
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log("Error creating user: ", error);
        }
    }

    return userDocRef;
};

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();

        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password || !auth) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const EmailAndPasswordSignIn = async (email, password) => {
    if (!email || !password || !auth) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const checkAuth = () => {
    let x = auth;
    console.log(x);
    if (x.currentUser) return alert("YOU ARE *LOGGED IN*");
    alert("YOU ARE *NOT LOGGED IN*");
};

export const UserSignOut = async () => {
    return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
