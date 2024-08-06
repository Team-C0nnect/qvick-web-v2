// React 및 ReactDOM 모듈을 가져옴
import React from 'react'; // React 라이브러리로, 컴포넌트 및 JSX 문법을 사용
import ReactDOM from 'react-dom/client'; // React 컴포넌트를 실제 DOM에 렌더링하는 데 사용
import App from './App'; // 애플리케이션의 메인 컴포넌트를 가져옴
import reportWebVitals from './reportWebVitals'; // 웹 성능 지표를 측정하는 함수를 가져옴

const root = ReactDOM.createRoot(document.getElementById('root')); // React 애플리케이션의 루트 DOM 노드를 생성

// 애플리케이션을 'root' DOM 노드에 렌더링
root.render(
    // React.StrictMode로 감싸서 렌더링하여 잠재적인 문제를 발견할 수 있게 함
    <React.StrictMode>
        <App /> {/* 메인 애플리케이션 컴포넌트를 렌더링 */}
    </React.StrictMode>
);

// 웹 성능 지표를 측정하여 콘솔에 로그를 남김
reportWebVitals(console.log); // 측정된 성능 지표를 콘솔에 출력
