import React from "react";
import "./Login.css";
export default function Login() {
    return (
        <div className="LoginMain">
            <div className="BackGround">
                <div className="Login_Box">
                    <span className="Login-Title">Login</span>
                    <div className="Id_Box">
                        <input type="text" className="User_ID"></input>
                    </div>
                    <div className="PS_Box">
                        <input type="text" className="User_PS"></input>
                    </div>
                    <div className="Login_Button">
                        <button className="Login">로그인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}