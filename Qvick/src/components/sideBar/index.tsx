import { useNavigate } from "react-router-dom";
import home from "src/assets/images/sideBar/home.png";
import out from "src/assets/images/sideBar/out.png";
import check from "src/assets/images/sideBar/check.png";
import go from "src/assets/images/sideBar/go.png";
import "src/assets/scss/sideBar/style.scss"

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
