 //한번에 모든걸 개발할려고 하지말고 쉬운거 하나부터 개발 하면 나머지는 따라옴
// 첫번째 버튼0을 누르면  모든버튼(유저가 뭘 누를지 몰름)에 붙은 orange 클래스명 제거 orange 클래스명 추가 


//버튼 0을 누르면 1. 버튼0에 orange 클래스명 부착 2. div박스0에 show 클래스 부착
// 대신 모든버튼에 붙은 orange 클래스 명 제거  div박스 show 클래스명제거도 해야됨
// eq(0) == qeurySelectorAll('tab-button')[0] 이랑 똑같음
$('.tab-button').eq(0).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show'); 
});

$('.tab-button').eq(1).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(1).addClass('show'); 
});

$('.tab-button').eq(2).on('click', function () {
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(2).addClass('show'); 
});