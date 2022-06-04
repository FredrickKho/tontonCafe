
import SignUpForm from "./register-section/register-form.page";
import SignInForm from "./login-section/login-form.page";
import './login-register.styles.scss';
const Login = () => {

    return(
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}
export default Login;