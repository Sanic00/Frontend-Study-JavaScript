
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

//소수점이 있는 숫자 연산시 주의점
//10 + 20 -> 컴퓨터는 2진법으로 계산을함 그러기 때문에 소수점을 2진법으로 했기에
//반올림을 해버리기 때문에 오차가 생김

//소수점 반올림 하는법 
var num = (a * 1.1).toFixed(2); //숫자.toFixed(몇자리) <- 이거 쓰면 문자로 변환됨

//자바스크립트 + 연산자 특징
// '1' + 1  -> '11'로 됨 문자특징임
// 문자 + 문자 -> 문자 
// 그러기 떄문에 '숫자'를 숫자로 변환하고 싶으면 
//parseFloat('123') 실수
//parseInt('123')  정수

//Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
//(1초 == 1000ms 입니다)
           
function ms(min, sec) {
  return (min * 60 + sec) * 1000 ; 
}

ms(2, 10);

function price(a, b){
    var result = a * 0.9;
    if(b == true){
        var result= result - 1.5 ;
    }
        return result ; 
    }


price(10, true);