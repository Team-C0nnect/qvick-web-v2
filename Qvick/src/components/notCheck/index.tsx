import Head from "src/components/head/index";
import SideBar from "src/components/sideBar/index";
import NotCheckList from "src/components/notCheck/notCheckList/index";
import 'src/assets/scss/notCheck/style.scss'


export default function NotCheck() {
    return (
        <div className="notCheckWrap">
            <Head />
            <SideBar />
            <NotCheckList />
        </div>
    );
}
