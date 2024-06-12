import Head from "src/Components/Head/Head/Head";
import SideBar from "src/Components/SideBar/Sidebar";
import CheckList from "src/Components/Check/CheckList/index";
import 'src/Assets/Scss/check/style.scss'

export default function Check() {
    return (
        <div className="CheckWrap">
            <Head />
            <SideBar />
            <CheckList />
        </div>
    );
};