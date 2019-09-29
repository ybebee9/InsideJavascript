/* 기명함수 표현식의 함수 호출 방법 */

var add = function sum(x,y){
    return x+y;
};

// 7 정상적으로 출력됨
console.log(add(3,4));

// sum is not defined 에러 -> 함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근이 불가능함
console.log(sum(3,4));




/*
* 함수 선언문 형식으로 정의된 plus() 함수는 자바스크립트 엔진에 의해
* 함수변수명 plus인 함수 표현식 형태로 변경된다 */

// 함수 선언문(변경전)
function plus(x,y){
    return x+y;
}

// 함수선언문이 자바스크립트 엔진에 의해 함수 표현식형태로 변경
var plus = function plus(x,y){
    return x+y;
}

// 함수 이름과 함수 변수의 이름이 add로 같으므로 함수이름으로 함수가 호출되는것처럼 보이지만 , 실제로는 add 함수변수로 함수 외부에서 호출이 가능하게된것.