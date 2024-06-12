import { useNavigate } from "react-router-dom";
import home from "src/Assets/images/SideBar/home.png";
import out from "src/Assets/images/SideBar/out.png";
import check from "src/Assets/images/SideBar/check.png";
import go from "src/Assets/images/SideBar/go.png";
import "src/Assets/Scss/sideBar/style.scss"

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <div className="sideWrap">
            <div className="sideM">
                 <div className="moveWrap"
                    onClick={() => {
                        navigate("/Main")
                    }}>
                    <img src={home} alt="이미지"></img>
                      <span>구성원</span>
                </div>
                <div className="moveWrap"
                    onClick={() => {
                        navigate("/Check")
                    }}>
                    <img src={check} alt="이미지"></img>
                    <span>출석</span>
                </div>
                <div className="moveWrap"  
                    onClick={() => {
                        navigate("/NotCheck")
                    }}>
                    <img src={check} alt="이미지"></img>
                    <span>미출석</span>
                </div>
                <div className="moveWrap"
                    onClick={() => {
                        navigate("/OutMember")
                    }}>
                    <img src={go} alt="이미지"></img>
                    <span>외출</span>
                </div>
                <div className="moveWrap"
                    onClick={() => {
                        navigate("/HomeMember")
                    }}>
                    <img src={out} alt="이미지"></img>
                    <span>외박</span>
                </div>
                <div className="moveWrap"
                    onClick={() => {
                         navigate("/Approve")
                    }}>
                    <img src={check} alt="이미지"></img>
                    <span>승인</span>
                </div>
             </div>
        </div>
    )
}
