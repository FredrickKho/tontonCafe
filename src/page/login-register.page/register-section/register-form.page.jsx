import { useState } from "react";
import { createAuthUserWithEmailandPassword } from "../../../firebase/firebase";
import { createUserDocumentFromAuth } from "../../../firebase/firebase";
import FormInput from "../../../component/form-input/input-form.page";
import './register-form.styles.scss';
import Button from "../../../component/button/button";
const defaultFormField = {
    displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
}



const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormField)
    const {displayName,email,password,confirmPassword} = formFields;
    const clearFormField = () => {
        setFormFields(defaultFormField);
        return;
    }
    const handleSubmit =  async(event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        }

        try {
            const {user}= await createAuthUserWithEmailandPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            clearFormField();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('email already used. use another email');
            }else{
                console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    };

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange}  name="displayName" value={displayName}></FormInput>
                <FormInput label="Email" type="email" required onChange={handleChange}  name="email" value={email}></FormInput>
                <FormInput label="Password" type="password" required onChange={handleChange}  name="password" value={password}></FormInput>
                <FormInput label="Confirm Password" type="password" required onChange={handleChange}  name="confirmPassword" value={confirmPassword}></FormInput>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;