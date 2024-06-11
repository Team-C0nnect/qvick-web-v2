import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import NotCheckList from "src/Components/NotCheck/NotCheckList/index";
import * as S from "src/Components/NotCheck/NotCheck.Style";


export default function NotCheck() {
    return (
        <S.NotCheckWrap>
            <Head />
            <SideBar />
            <NotCheckList />
        </S.NotCheckWrap>
    );
}
