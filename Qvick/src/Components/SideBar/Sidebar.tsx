import "./Sidebar.css";
import React from 'react';

export default function SideBar() {
    return (
        <div className="SideWrap">
            <div className="SideBar">
                <div className="SideM">
                    <div className="MemberWrap">구성원</div>
                    <div className="CheckWrap">출석</div>
                    <div className="HomeWrap">외출/외박</div>
                </div>
            </div>
        </div>
    )
}