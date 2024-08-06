import React from 'react';// React를 가져옵니다. JSX를 사용하기 위해 필요
// React Testing Library에서 render와 screen을 가져옴
import { render, screen } from '@testing-library/react';
// - render: React 컴포넌트를 렌더링하여 테스트 환경에서 사용할 수 있게함
// - screen: 렌더링된 컴포넌트 내에서 요소를 쿼리하는 데 사용

import App from './App'; // 테스트할 App 컴포넌트를 가져옴

// 'renders learn react link'라는 설명과 함께 테스트 케이스를 정의합니다.
test('renders learn react link', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);

  // 'learn react'라는 텍스트를 가진 요소를 찾아 linkElement 변수에 저장합니다.
  // 정규식 /learn react/i는 대소문자를 구분하지 않고 'learn react'를 찾습니다.
  const linkElement = screen.getByText(/learn react/i);

  // linkElement가 문서에 존재하는지 확인합니다.
  expect(linkElement).toBeInTheDocument(); // linkElement가 DOM에 존재하는지 여부를 테스트
});
