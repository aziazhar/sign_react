import React, { useState, useEffect } from 'react';
import validation from "./validation"


  const FormSignup = ({ submitForm }) => {
    const [values, setValues] = useState({
      email: "",
      companyname: "",
      password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  }, [errors]);


    return (
        <div className="container bal_height">
      <p className=" text-center"><strong>Omega</strong></p>
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto ">
          <div className="card card-signin my-5 ">
            <div className="card-body">
              <h2 className="text-center sign_heigt"><strong>Sign Up</strong></h2>
              <p className=" text-center">No credit card required</p>
              <form className="form-signin padding_form" >
                <div className="form-label-group">
                  <input 
                    type="email"
                    id="inputEmail"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    value={values.email} 
                    onChange={handleChange}
                    />      
                    {errors.email && <p className="error">{errors.email}</p>}

                  <label for="inputEmail">Email address</label>
                 </div>

                <div className="form-label-group">
                  <input 
                    type="companyname"
                    id="inputcompanyname"
                    name="companyname"
                    className="form-control"
                    placeholder="Company name" 
                    value={values.companyname} 
                    onChange={handleChange}
                    autofocus
                  />
                   {errors.companyname && <p className="error">{errors.companyname}</p>}
                  
                  <label for="inputcompanyname">Company name</label>
                 </div>

                <div className="form-label-group">
                  <input 
                    type="password"
                    id="inputPassword"
                    name="password"  
                    className="form-control" 
                    placeholder="Password"
                    value={values.password} 
                    onChange={handleChange}
                   />
                     {errors.password && <p className="error">{errors.password}</p>}
                  <label for="inputPassword">Password</label>
                 </div>
  
                <div className="custom-control custom-checkbox mb-3">
                  <input 
                    type="checkbox"
                    className="custom-control-input" 
                    id="customCheck1" 
                  />
                  <label className="custom-control-label fnt_sz" for="customCheck1"> I agree to the <span 
                    className="span_color">Terms & Conditions</span></label>
                </div>
                           
                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit" onClick={handleFormSubmit}>Get Started</button>             
              </form >
              <br/> 
              <p className=" text-center fnt_sz">Already have an account?<span className="span_color"> Sign in</span></p>

              </div>
           </div>
         </div>
       </div>
     </div>



    )
}

export default FormSignup;
