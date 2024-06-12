import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import NotCheckList from "src/Components/NotCheck/NotCheckList/index";
import 'src/Assets/Scss/notCheck/style.scss'


export default function NotCheck() {
    return (
        <div className="notCheckWrap">
            <Head />
            <SideBar />
            <NotCheckList />
        </div>
    );
}
