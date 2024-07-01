import { useRef, useState } from "react";
import { NOT_AVAILABLE, YOUTUBE_LOGO } from "../utils/constants";
import { checkValidData } from "../utils/Validate";
import { googleLogin, signIn, signUp } from "../utils/SignUpSignIn";
import { useDispatch } from "react-redux";

const LoginPage = ()=>{
    const [errorMessage , setErrorMessage] = useState(null);
    const [isSignIn , setIsSignIn] = useState(false);

    const nameRef  = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const toggleSignInForm = ()=>{
        setIsSignIn(!isSignIn);
    }
    const dispatch = useDispatch();

    const handleGoogleLogin = ()=>{
        googleLogin(setErrorMessage);
    }

    const handleSubmitButton = ()=>{
        // Validating form data
        const message = checkValidData(emailRef.current.value , passwordRef.current.value);
        setErrorMessage(message);

        // if not valid then don'   t go further..
        if(message) return;

        // check if signing up or sign in
        if(!isSignIn){
            signUp(nameRef , emailRef , passwordRef , setErrorMessage , dispatch);
        }
        else{
            signIn(emailRef , passwordRef , setErrorMessage , dispatch);
        }
    }


    return(
        <div className="bg-slate-100 h-screen w-screen overflow-hidden flex items-center justify-center ">
            <div className="flex  gap-5 h-[500px] w-8/12 p-5 mx-auto px-10 justify-center bg-white">
                <div className="w-5/12 mt-10">
                    <img src={YOUTUBE_LOGO|| NOT_AVAILABLE} className=" h-32 w-32 object-contain"></img>
                    <h1 className="font-semibold text-4xl -mt-5 text-gray-600 ">{isSignIn? "Sign In": "Sign Up"}</h1>
                    {isSignIn && <div>
                    <p className="mt-10">OR <br></br>Login using </p>
                    <button onClick={handleGoogleLogin} className="px-4 w-full flex items-center justify-center p-2 hover:bg-gray-400 duration-200 transition-all bg-slate-200 rounded-lg mt-2"><img src="https://th.bing.com/th/id/OIP.aoNGSVIqKHtM-NWf3QrvdwHaHa?rs=1&pid=ImgDetMain" className="h-10 w-10 rounded-full "></img>Google</button>
                    </div>}
                </div>
                <form onSubmit={(e)=>e.preventDefault()} className="flex gap-3 w-8/12 px-5 justify-center flex-col">
                    <label for="email"></label>
                    <input placeholder="Enter Your email" id="email" ref={emailRef}  className=" outline-none px-4 my-5 w-full py-2 border-2 text-lg border-gray-500 rounded-lg "></input>
                    <input type="password" placeholder="Enter Your Password" ref={passwordRef} id="password"  className=" outline-none px-4 w-full py-2 border-2 text-lg border-gray-500 rounded-lg "></input>
                    {errorMessage!=="" &&<p className="text-red-500 font-bold">{errorMessage}</p>}
                    <p className="text-blue-500 hover:underline cursor-pointer" onClick={toggleSignInForm}>{!isSignIn? "Already a user! Sign in": "New to Youtube! Sign up now"}</p>
                    <div className="w-full justify-end flex">
                        <button type="submit" onClick={handleSubmitButton} className="bg-blue-700 rounded-xl px-4 p-2 text-white hover:bg-blue-800">Submit</button>
                    </div>
                </form>
            </div>
            

        </div>
    )
}

export default LoginPage;