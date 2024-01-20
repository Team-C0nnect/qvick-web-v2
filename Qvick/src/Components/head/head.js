import "./head.css";
import React, { useEffect, useState } from "react";
import Logo from "../../Assets/img/logo.png";

export default function Head() {
    return (
        <div className="Head">
            <div className="HeadTitleWrap">
                <img className="Logo" src={Logo} alt="이미지"></img>
            </div>
        </div>
    )
}