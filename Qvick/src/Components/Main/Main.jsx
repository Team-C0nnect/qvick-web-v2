import "./Main.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from '../head/head'
export default function Main() {
    return (
        <div className="Main">
            <Head />
            <div className="Search">
                <input className="Search_Box" 
                placeholder="원하시는 학생의 정보를 입력해주세요."></input>
                <input type="button" className="Search_icon"></input>
                <div className="Searcg_icon_line"></div>
            </div>
        </div>
    )
}