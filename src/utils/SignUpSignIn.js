import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {auth} from "./firebase";
import { addUser } from "./userSlice";
import { userIcon } from "./constants";

export const signUp = (name , email , password, setErrorMessage , dispatch)=>{
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        const{email , displayName , photoURL} = user;
        dispatch(addUser({
            email: email , displayName: displayName , photoURL: photoURL||userIcon
        }));
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
    });
}

export const signIn = (email , password , setErrorMessage ,dispatch) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const{email , displayName , photoURL} = user;
        dispatch(addUser({
            email: email , displayName: displayName , photoURL: photoURL||userIcon
        }));
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
    });
}

export const googleLogin = (setErrorMessage)=>{
    const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            auth.languageCode = 'it';
            // To apply the default browser preference instead of explicitly setting it.
            // auth.useDeviceLanguage();
                signInWithPopup(auth, provider)
                .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setErrorMessage( errorMessage);
                // ...
                });
}