import React, { useState } from 'react';
import './styles/login.css';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';


function Login(props) {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [loginStatus, setLoginStatus] = useState(true);
    const navigate = useNavigate();

    const login = async (user,password) => {
        try{
            let payload = {
                "login": user,
                "password": password
            }

            console.log(payload);

            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            handleLogin(data);
        } catch (error) {
            console.log('Login failed:', error);
            setLoginStatus(false);
        }
    };

    let handleLogin = (data) => {
        console.log(data);
        if (data.status === "success") {
            console.log("Login exitoso");
            setLoginStatus(true);
            navigate("/listar");
            return true;
        } else {
            console.log("Login fallido");
            setLoginStatus(false);
            return false;
        }
    };

    const renderError = () => {
        if (loginStatus === false) {
            return (<FormattedMessage id="login error" />);
        } else {
            return ("");
        }
    }

    return (
        <div className="login">
            <div className="form">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><FormattedMessage id='usuario' /></label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setUsuario(e.target.value)}></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><FormattedMessage id='contraseña' /></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onInput={e => setPass(e.target.value)}></input>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={e => {e.preventDefault(); login(usuario, pass)}}><FormattedMessage id='ingresar' /></button>
                  <div>
                      <span>{renderError()}</span>
                  </div>
                </form>
            </div>
        </div>
    )
}

export default Login;