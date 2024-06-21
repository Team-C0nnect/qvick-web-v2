import { useNavigate } from "react-router-dom";
import home from "src/assets/images/sideBar/home.png";
import check from "src/assets/images/sideBar/check.png";
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
             </div>
        </div>
    )
}
