const reportWebVitals = onPerfEntry => {
  // onPerfEntry가 함수인지 확인
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // 'web-vitals' 라이브러리를 동적으로 import
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 성능 지표를 측정하고 결과를 onPerfEntry 콜백에 전달
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
