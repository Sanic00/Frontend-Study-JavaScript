 //한번에 모든걸 개발할려고 하지말고 쉬운거 하나부터 개발 하면 나머지는 따라옴
// 첫번째 버튼0을 누르면  모든버튼(유저가 뭘 누를지 몰름)에 붙은 orange 클래스명 제거 orange 클래스명 추가 


//버튼 0을 누르면 1. 버튼0에 orange 클래스명 부착 2. div박스0에 show 클래스 부착
// 대신 모든버튼에 붙은 orange 클래스 명 제거  div박스 show 클래스명제거도 해야됨
// eq(0) == qeurySelectorAll('tab-button')[0] 이랑 똑같음

// var button = $('.tab-button');
// button.eq(0).on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show'); 
// });

// 좋은 관습 -> 자주쓰는 셀렉터 변수에 넣어쓰기
// button.eq(1).on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show'); 
// });

// button.eq(2).on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show'); 
// });

//  for 반복문
// let var 변수의 범위 차이가 있음
for (let i=0; i < $('.tab-button'); i++) {
    $('.tab-button').eq(i).on('click', function (){ 
     tab(i);
});
}

function tab(num) {
    $('.tab-button').eq(num).on('click', function (){
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(num).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(num).addClass('show'); 
    });
}
//이벤트 버블링 
$('.list').click(function (e) {
    //지금 누른게 버튼 0 이면 / (버튼 0에 orange 박스 0 show 부착하기) -> tab(0)
    // if(e.target == document.querySelectorAll('tab-button')[0]){
    //     tab(0);
    // }
    // if(e.target == document.querySelectorAll('tab-button')[1]){
    //     tab(1);
    // }
    // if(e.target == document.querySelectorAll('tab-button')[2]){
    //     tab(2);
    // }
    //지금 누른게 버튼 1 이면 / (버튼 0에 orange 박스 0 show 부착하기) -> tab(1)
     //지금 누른게 버튼 2이면 / (버튼 0에 orange 박스 0 show 부착하기) -> tab(2)     
    //  tab(지금누른버튼에 숨겨져잇는 data-id);
     tab(e.target.dataset.id);
})
// 오늘의 결론 : 

// for 문법의 용도를 잘 기억해둡시다.  

// 비슷한 코드들을 직접 복붙하는게 귀찮으면 for 반복문을 쓰는 것일 뿐이지 

// for 부터 써놓고 무슨 코드를 채울지 고민하고 그러면 안됩니다.  

//"제 코드가 좋은 코드인지 모르겠어요" 라고 묻는 분들이 많은데

// 1. 원하는 기능이 잘 구현되었는가

// 2. 확장성좋은가

// 3. 나중에 관리가 쉬울 것인가

// 4. 성능문제 없는가