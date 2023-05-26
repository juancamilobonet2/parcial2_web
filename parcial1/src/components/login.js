import React, { useState } from 'react';
import './styles/login.css';
import { useNavigate } from "react-router-dom";


function Login(props) {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [loginStatus, setLoginStatus] = useState(true);
    const navigate = useNavigate();

    const login = async (user,pass) => {
        let response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({
                login: user,
                password: pass
            })
        });
        const data = await response.json();

        if (data.status === 200) {
            console.log("Login exitoso");
            setLoginStatus(true);
            navigate("/principal");
            return true;
        } else {
            console.log("Login fallido");
            setLoginStatus(false);
            return false;
        }
    };

    const renderError = () => {
        if (loginStatus === false) {
            return ("Error de autenticacion. Revise sus credenciales");
        } else {
            return ("");
        }
    }

    return (
        <div className="login">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput={e => setUsuario(e.target.value)}></input>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onInput={e => setPass(e.target.value)}></input>
              </div>
              <button type="submit" class="btn btn-primary" onClick={e => login(usuario, pass)}>Submit</button>
              <div>
                  <span>{renderError()}</span>
              </div>
            </form>

        </div>
    )
}

export default Login;