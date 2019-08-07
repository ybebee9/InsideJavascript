/* 연산자
* 자바스크립트의 연산자는 대부분 다른 언어와 유사하다.
* +연산자는 더하기 연산과 문자열 연결 연산을 수행한다.
* 모두 숫자일 경우에만 더하기 연산이 수행되고,
* 나머지는 문자열 연결 연산이 이뤄진다. */

var add1 = 1 + 2;
var add2 = 'my' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log(add1); // 3
console.log(add2); // mystring
console.log(add3); // 1string
console.log(add4); // string2
