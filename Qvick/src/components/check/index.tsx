import Head from "src/components/head/index";
import SideBar from "src/components/sideBar/index";
import CheckList from "src/components/check/checkList/index";
import 'src/assets/scss/check/style.scss'

export default function Check() {
    return (
        <div className="CheckWrap">
            <Head />
            <SideBar />
            <CheckList />
        </div>
    );
};