
import { signInWithGooglePopup } from "../../firebase/firebase";
import { createUserDocumentFromAuth } from "../../firebase/firebase";
import SignUpForm from "./register-section/register-form.page";
const Login = () => {

    const logGoogleUserPopup = async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Login</h1>
            <button onClick={logGoogleUserPopup}>Sign In with Google Popup</button>
            <SignUpForm></SignUpForm>
        </div>
    )
}
export default Login;