// 이 라이브러리는 알림을 표시하는 기능을 제공
import Swal from "sweetalert2"; // sweetalert2 라이브러리를 가져옴

// Toast 설정을 정의 이 설정은 사용자에게 간단한 알림을 토스트 형식으로 보여주는 데 사용
const Toast = Swal.mixin({
    // toast: true 설정은 알림을 작은 토스트 형식으로 만듬
    toast: true,
    // position: "top-end" 설정은 알림을 화면의 오른쪽 상단에 위치
    position: "top-end",
    // showCancelButton: false 설정은 취소 버튼을 숨김
    showCancelButton: false,
    // timer: 3000 설정은 알림이 3초 후에 자동으로 사라지게 만듬
    timer: 3000,
    // timerProgressBar: true 설정은 알림에 타이머 진행 표시줄을 추가
    timerProgressBar: true,
    // didOpen 콜백 함수는 토스트가 열릴 때 실행
    // 이 함수는 마우스가 토스트에 진입하거나 떠날 때 타이머를 멈추거나 다시 시작
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

// showToast 함수를 정의 이 함수는 주어진 아이콘과 제목으로 토스트 알림을 표시
export const showToast = (icon: any, title: string) => {
    Toast.fire({
        // icon: 알림에 표시할 아이콘
        icon,
        // title: 알림에 표시할 제목
        title,
    });
};