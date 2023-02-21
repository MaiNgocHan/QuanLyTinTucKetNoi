import React, { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import userApi from "../api/UserAPI.js";
import "./Register.css"

export const Register = ({handleChange}) =>{

    const initialValues={
        Username:'',
        // name:'',
        Email:'',
        Password:'',
        // confirmpassword: '',
      };
    // const [Email, setEmail] = useState('');
    // const [Pass, setPass] = useState('');
    // const [Name, setName] = useState('');

    const [value, setValue] = React.useState("''");
    const handleValue = (event) => {
      setValue(event.target.value);
    };

    const [errorMessage, setErrorMessage] = React.useState("");

    const validationSchema = Yup.object().shape({
        Email: Yup.string().required("Required"),
        Name: Yup.string().required("Required"),
        Password: Yup.string().required("Required"),
    });

    const onSubmit=(values, props)=>{
        // if(value.confirmpassword === Password){
            console.log(props);
            console.log(value);
            userApi.signUp(values,value);
            setErrorMessage("Sign up successfully! Please check your email to activate your account.");
        // }
        // else{
        //     console.log("confirm password is incorrect");
        //     setErrorMessage("Confirm password is incorrect")
        // }
        };

    return(
        <div class="loginForm">
            <div className="auth-form-container">
        
            <h1 className="login__title">Dang Ky</h1>
            <div className="login-form">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => (
                    <Form>
                        <label htmlfor= "Name">Name</label>
                        <input 
                        // value={Name} 
                        // onChange  = {(e)=> setName(e.target.value)}
                        id="Name"
                        type="Name"
                        placeholder=" Full Name"
                        name="Name"/>


                        <label htmlfor="Email">Email</label>
                        <input 
                        // value={Email}
                        // onChange= {(e) => setEmail(e.target.value)}
                        type = "Email"
                        placeholder="yourmail@gmail.com"
                        id="Email" 
                        name="Email"/>

                        <label htmlfor="Password">Password</label>
                        <input 
                        // value={Pass} 
                        // onChange= {(e) => setPass(e.target.value)}
                        type = "Password"
                        placeholder="your password"
                        id="Password"
                        name="Password"/>

                        {/* <button 
                        id= "Register_btn"
                        type="submit"> Register</button> */}

                        
                    
                        <Link to="/Login"> 
                        <button > Login</button>
                        </Link>
                        </Form>
                    
                )}
            </Formik>
        </div>
        </div>
        </div>
    );
}
export default Register;