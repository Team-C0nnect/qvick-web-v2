import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "src/Components/Login/Login";
import Head from "src/Components/Head/Head/Head";
import Side from "src/Components/SideBar/Sidebar";
import HeadLogo from "src/Components/Head/Logo/Logo";
import HeadName from "src/Components/Head/Name/Name";
import Member from "src/Components/Member/Member";
import Check from "src/Components/Check/Check";
import NotCheck from "src/Components/NotCheck/NotCheck";
import OutMember from "src/Components/OutMember/OutMember";
import HomeMember from "src/Components/HomeMember/HomeMember";
import Back from "src/Components/Back/Back";
import ListBack from "src/Components/ListBack/ListBack";
import MemberList from 'src/Components/Member/MemberList/index';
import NotCheckList from 'src/Components/NotCheck/NotCheckList/index';
import CheckList from 'src/Components/Check/CheckList/index';
import "./styles/global.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Head" element={<Head />} />
          <Route path="/Side" element={<Side />} />
          <Route path="/HeadLogo" element={<HeadLogo />} />
          <Route path="/HeadName" element={<HeadName />} />
          <Route path="/Main" element={<Member />} />
          <Route path="/Check" element={<Check />} />
          <Route path="/NotCheck" element={<NotCheck />} />
          <Route path="/OutMember" element={<OutMember />} />
          <Route path="/HomeMember" element={<HomeMember />} />
          <Route path="/Back" element={<Back />} />
          <Route path='ListBack' element={<ListBack />} />
          <Route path='MemberList' element={<MemberList />} />
          <Route path='NotCheckList' element={<NotCheckList />} />
          <Route path='CheckList' element={<CheckList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
