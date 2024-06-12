import "src/Assets/Scss/member/style.scss";
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import MemberList from "src/Components/Member/MemberList/index";

export default function Member() {
    return (
        <div className="MemberWrap">
            <Head />
            <SideBar />
            <MemberList />
        </div>
    );
}
