/* !!연산자
* 자바스크립트 프레임워크 소스 코드를 분석하다보면 !!와 같이 ! 연산자를 두 개 붙여서 사용하는 경우를 종종 보게된다.
* !!의 역할은 피연산자를 boolean값으로 변환하는것이다. */

console.log(!!0);
console.log(!!1);
console.log(!!'string');
console.log(!!'');
console.log(!!true);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![1,2,3]);

/* 객체는 값이 비어있어도 true로 변환된다. */
