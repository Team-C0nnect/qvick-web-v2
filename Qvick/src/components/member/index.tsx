import "src/assets/scss/member/style.scss";
import Head from "src/components/head/index";
import SideBar from "src/components/sideBar/index";
import MemberList from "src/components/member/memberList/index";

export default function Member() {
    return (
        <div className="MemberWrap">
            <Head />
            <SideBar />
            <MemberList />
        </div>
    );
}
