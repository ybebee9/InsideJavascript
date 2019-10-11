/* 함수 선언문 방식으로 함수 생성하기
* 함수 선언문 방식은 함수 리터럴 형태와 같다.
* 주의할점은 함수 선언문 방식으로 정의된 함수의 경우는 반드시 함수명이 정의되어있어야한다.
* 일반적으로 함수 선언문 방식은 C/C++에서 사용하는 함수 정의 방법과 유사하지만,
* function이라는 키워드를 명시적으로 사용하고 리턴값과 매개변수로 넘기는 값에 변수타입(int,char등)을 기술하지 않는다는점에서 차이가 있다. */

// add()함수 선언문
function add(x,y) {
    return x+y;
}

console.log(add(3,4)); //출력값 7

