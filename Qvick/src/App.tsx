import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "src/components/login/index";
import Head from "src/components/head/index";
import Side from "src/components/sideBar/index";
import HeadLogo from "src/components/head/logo/index";
import HeadName from "src/components/head/name/index";
import Member from "src/components/member/index";
import Check from "src/components/check/index";
import NotCheck from "src/components/notCheck/index";
import MemberList from "src/components/member/memberList/index";
import NotCheckList from 'src/components/notCheck/notCheckList/index';
import CheckList from "src/components/check/checkList/index";
import "./styles/global.css"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Head" element={<Head />} />
          <Route path="/Side" element={<Side />} />
          <Route path="/HeadLogo" element={<HeadLogo />} />
          <Route path="/HeadName" element={<HeadName />} />
          <Route path="/Main" element={<Member />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/NotCheck" element={<NotCheck />} />
          <Route path='MemberList' element={<MemberList />} />
          <Route path='NotCheckList' element={<NotCheckList />} />
          <Route path='CheckList' element={<CheckList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
