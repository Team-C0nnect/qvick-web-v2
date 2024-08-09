import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 훅을 가져옴
import home from "src/assets/images/sideBar/home.png"; // '구성원' 메뉴에 사용할 홈 이미지를 가져옴
import check from "src/assets/images/sideBar/check.png"; // '출석' 및 '미출석' 메뉴에 사용할 체크 이미지를 가져옴
import "src/assets/scss/sideBar/style.scss"; // 사이드바 스타일을 위한 SCSS 파일을 가져옴
import React from "react"; // React를 가져옴

export default function SideBar() {
    const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 훅을 초기화

    return (
        <div className="sideWrap"> {/* 사이드바 전체를 감싸는 컨테이너 */}
            <div className="sideM"> {/* 메뉴를 감싸는 컨테이너 */}
                {/* '구성원' 메뉴 항목 */}
                <div className="moveWrap"
                     onClick={() => {
                         navigate("/Main"); // '구성원' 메뉴를 클릭하면 "/Main" 페이지로 이동
                     }}>
                    <img src={home} alt="이미지" /> {/* 홈 이미지를 표시 */}
                    <span>구성원</span> {/* 메뉴 이름 */}
                </div>
                {/* '출석' 메뉴 항목 */}
                <div className="moveWrap"
                     onClick={() => {
                         navigate("/Check"); // '출석' 메뉴를 클릭하면 "/Check" 페이지로 이동
                     }}>
                    <img src={check} alt="이미지" /> {/* 체크 이미지를 표시 */}
                    <span>출석</span> {/* 메뉴 이름 */}
                </div>
                {/* '미출석' 메뉴 항목 */}
                <div className="moveWrap"
                     onClick={() => {
                         navigate("/NotCheck"); // '미출석' 메뉴를 클릭하면 "/NotCheck" 페이지로 이동
                     }}>
                    <img src={check} alt="이미지" /> {/* 체크 이미지를 표시 */}
                    <span>미출석</span> {/* 메뉴 이름 */}
                </div>
            </div>
        </div>
    );
}
