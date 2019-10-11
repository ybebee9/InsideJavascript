
// parent() 함수 정의
function parent() {
    var a = 100;
    var b = 200;

    // child() 내부 함수 정의
    function child() {

        var b = 300;

        /* 	내부함수에서는 자신을 둘러 싼 부모 함수의 변수에 접근이 가능하다.
            자바스크립트 스코프 체이닝 때문에 함수 내부에서는 함수 밖에서 선언된 변수나 함수의 접근이 가능하다. */
        console.log(a);
        // b는 child() 함수에 선언이 되어있으므로 parent() 함수의 b 변수가 아닌 child() 함수의 변수 b 값이 출력됨.
        console.log(b);
    }

    child();
}

parent(); // 100 300 출력

/* 	내부함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다.
	기본적으로 함수 스코프 밖에서는 함수 스코프 안에 선언된 모든 변수나 함수에 접근이 불가능하다.
	parent()함수 외부에서 parent()함수 스코프 안에 있는 child() 함수를 호출하려 했으므로 에러가 발생한것이다.  */
child(); // Uncaught ReferenceError : child is not defined