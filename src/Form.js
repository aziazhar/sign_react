import React, {useState} from 'react'
import FormSignup from "./FormSignup"
import SignupFormsucess from "./SignupFormsucess"

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm  = () => {
        setFormIsSubmitted(true);
    };
    return (
        <div>
           { !formIsSubmitted ? <FormSignup submitForm={submitForm}/> : <SignupFormsucess/> }
        </div>
    );
};

export default Form;
