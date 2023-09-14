
function 함수(a) {
    1+a;
}

함수(5); // 6의 결과가 나옴 

//function 문법 
//1.긴코드 축약해서 쓸 수 있음 2. 파라미터 추가 기능

function na() { // 함수는 수학이랑 똑같음
    return 123; //return은 함수종료 기능을 가지고 있어 return 밑에 코드를 적어봤자 실행 안됨 주의 !
    alert('return밑에 있어서 실행안됨~~');
}

var 리턴 = na();
console.log(리턴);// 실행하면 123을 퇴하고 뱉는다 (리턴으로 반환 함)

//함수는 마법의 박스 같은거임

function vat(price) {
    return price * 0.3; 
}

console.log(vat(500000));