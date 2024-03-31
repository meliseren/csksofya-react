import React, { useState } from 'react'

const LoginView = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameErr, setUsernameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();

        if (username && password) {
            setUsernameErr(false);
            setPasswordErr(false);
            console.log(username, password);
        }
        else {
            setUsernameErr(!username);
            setPasswordErr(!password);
        }
    }

    return (
        <div className="login">
            <div className="login-box">
                <div className="login-title">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    <p>Yönetim Paneli Girişi</p>
                </div>
                <div className="login-logo">
                    <img src="https://csksofya.com/img/logo.png" />
                </div>
                <div className="form-control">
                    <p>Kullanıcı Adı</p>
                    <input
                        type="text"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                        value={username}
                    />
                    {usernameErr && <p className="panel-input-err">* Kullanıcı adı boş olamaz!</p>}
                </div>
                <div className="form-control">
                    <p>Parola</p>
                    <input
                        type="password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        value={password}
                    />
                    {passwordErr && <p className="panel-input-err">* Şifre boş olamaz!</p>}
                </div>
                <div className="btn-container-signin">
                    <button
                        onClick={handleLogin}
                        className="btn btn-signin"
                    >
                        <i className="fa-solid fa-check"></i>Giriş Yap
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginView