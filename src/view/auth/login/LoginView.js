import React from 'react'

const LoginView = () => {
    const handleLogin = () => {
        console.log("Clicked!")
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
                    />
                </div>
                <div className="form-control">
                    <p>Parola</p>
                    <input
                        type="password"
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className="btn btn-signin"
                ><i className="fa-solid fa-check"></i>Giriş Yap</button>
            </div>
        </div>
    )
}

export default LoginView