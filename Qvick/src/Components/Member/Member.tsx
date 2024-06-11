import * as S from "src/Components/Member/Member.Style"
import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import MemberList from "src/Components/Member/MemberList/index";
import * as XLSX from 'xlsx';

export default function Member() {
    return (
        <S.MemberWrap>
            <Head />
            <SideBar />
            <MemberList />
        </S.MemberWrap>
    );
}
