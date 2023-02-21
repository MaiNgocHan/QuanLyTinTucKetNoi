import React,{ useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
// import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import userApi from "../api/UserAPI.js";
import "./Login.css"
export const Login = (props) =>{


    const initialValues = {
        username: "",
        password: "",
      };
    // const [Email, setEmail] = useState('');
    // const [Pass, setPass] = useState('');


    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");

    const validationSchema = Yup.object().shape({
        Email: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
      });

    const handleSubmit = async (values) => {
    const response = await userApi.Login(values);
    if (response.accessToken !== undefined && response.roles[0] !== 'ROLE_ADMIN') {
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/Home");
        window.location.reload(false);
    }
    else if(response.roles[0] === 'ROLE_ADMIN'){
        setErrorMessage("This account is admin account");
    }
    else if(!response){
        setErrorMessage("Incorrect username or Password ");
    }
    };

    return(

<div class="loginForm">
    <div className="auth-form-container">
        
        <h1 className="login__title">dang nhap</h1>
        <div className="login-form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {/* <Field
                as={TextField}
                id="filled-required"
                label="Username"
                type="text"
                className="login__input"
                name="username"
                helperText={<ErrorMessage name="username" className="error"/>}
              /> */}
              <label htmlfor= "Username">Name</label>
                <input 
                // value={Name} 
                // onChange  = {(e)=> setName(e.target.value)}
                id="Username"
                type="Username"
                placeholder=" Full Name"
                name="Username"/>
                      
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
              {errorMessage && <div> {errorMessage} </div>}
              <div className="form__btn">
                <Link to={`/register`}>
                  <button
                    className="Login__btn"
                    variant="outlined"
                    color="primary"
                  >
                    Register
                  </button>
                </Link >
                <Link to = "/Home">
                <button
                  className="Login__btn"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
        </div>
        </div>
    </div>
      
    );
};
export default Login;