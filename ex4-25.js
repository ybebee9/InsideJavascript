/* 함수를 호출할 때 this 바인딩을 보여주는 예제 코드 */

// 전역변수 test 선언. 자바스크립트의 전역변수는 전역 객체 window의 프로퍼티로 접근이 가능하다.
var test = 'This is test';
console.log(window.test); // This is test

// sayFoo()함수
var sayFoo = function () {
    /*  sayFoo() 함수 호출 시 this는 전역 객체에 바인딩 된다고 했으므로 전역 객체인 window에 바인딩 된다.
    *   때문에 this.test는 window.test를 의미한다. */
    console.log(this.test); // This is test
}