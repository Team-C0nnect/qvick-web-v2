import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "src/Components/Main/MainList/MainList.Style";

export default function MainList() {
    const [mainList, setMainList] = useState([]);

    useEffect(() => {
        axios.get('REACT_WEB_SERVER_URL')
            .then((response) => {
                setMainList(response.data);
            })
            .catch((error) => {
                console.log(error);
            }); 
    }, []);

    return (
        <S.MainList>
            <S.MainTable>
                <S.MainColgroup>
                    <col width="15%"/>
                    <col width="15%"/>
                    <col width="15%"/>
                    <col width="15%"/>
                    <col width="40%"/>
                </S.MainColgroup>
                <S.MainThread>
                    <tr>
                        <th>학년</th>
                        <th>반</th>
                        <th>번호</th>
                        <th>이름</th>
                        <th>출석</th>
                        <th>기숙사</th>
                    </tr>
                </S.MainThread>
                <S.MainTbody>
                    {
                        mainList.map((id,userId,checkedDate) => {
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{userId}</td>
                                    <td>{checkedDate}</td>
                                </tr>
                            )
                        })
                    }
                </S.MainTbody>
            </S.MainTable>
        </S.MainList>
    );
}
