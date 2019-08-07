/* 배열의 동적  프로퍼티 생성
* 배열도 자바스크립트 객체이므로, 인덱스가 숫자인 배열 원소 이외에도 객체처럼 동적으로 프로퍼티를 추가할 수 있다. */

// 배열생성
var arr = ['zero','one','two'];
console.log(arr.length);

// 프로퍼티 동적 추가
/* 배열의 프로퍼티를 동적으로 추가해도 length는 바뀌지 않음
* 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변경되었을 경우에만 변경됨 */
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);

// 배열 객체 출력
console.dir(arr);