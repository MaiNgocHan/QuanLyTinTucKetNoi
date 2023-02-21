import axiosClient from "../axiosClient";
import authHeader from "./auth-header";

const userApi ={
    register: (parma, checked) =>{
        const url = "/auth/register"
        return axiosClient.post(
            url, {
                Email: parma.Email,
                Username: parma.username,
                Password: parma.Password,
                
            }
        );
    },

    signIn: (param) => {
        const url = "/auth/Login";
        return(axiosClient.post(
        url,
        {
            Email: param.Email,
            Password: param.Password,
        }
        ).then(function(response) {
            return response;
        }).catch(function(error) {
            return error;
        }
        ));
    },

}
export default userApi;