let age = 25; 
let city = "Korea";
var city1 = "Japan";

console.log(age);
console.log(city);

var name = 'park';
var id = 0;

function showName(){
  var name = 'kim';
  var id = 1;
  console.log(name);
}

showName(); // name -> kim
console.log(id); // 0 

//Q3. 이자율 계산하기
// 철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.

// 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,

// 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.

// 그래서 민준이는

// (1) 변수에 예금액을 넣으면

// (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데

// 어떻게 코드를 짜면 될까요? 

var 예금액 = 0;
var 미래예금액 = 0;

function bank(예금액){
    if(예금액 < 50000){
        미래예금액 = 예금액 * 1.15 * 1.15
        }else if (예금액 >= 50000){ 
            미래예금액 = 예금액 * 1.20  * 1.20
            console.log(미래예금액); 
        }
}

bank(60000);
