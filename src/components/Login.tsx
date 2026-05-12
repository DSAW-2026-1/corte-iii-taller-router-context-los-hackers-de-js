import './../App.css'
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {LoginContext} from "../context/LoginContext.tsx";
function LoginComponent() {
    setLoginContext()
    const navigate = useNavigate();
    function setToken(token: string) {
        localStorage.setItem('token', token);
    }
    function handleLogin(){
        setToken("ThisIsAVeryLegitLoginToken")

        navigate("/")
    }
    return (
        <>
            <p>Something something login</p>
            <button
                type="button"
                onClick={() => handleLogin()}
            >Login</button>
        </>
    )
}
export default LoginComponent