function parent() {
    var a = 100;

    // child() 내부 함수
    var child = function () {
        console.log(a);
    }

    // child()함수 반환
    return child();
}

var inner = parent();

/*	inner변수에 함수 호출 연산자 ()를 붙여 함수 호출 구문을 만들면,
	parent() 함수 스코프 밖에서도 내부 함수 child()가 호출된다.
	호출하는 내부 함수에는 a 변수가 정의되어있지 않아, 스코프 체이닝으로 부모 함수에 a변수가 정의되어 있는지 확인하게되고,
	a가 정의되어 있으면 그 값이 그대로 출력된다.
*/
inner(); // 출력값 100