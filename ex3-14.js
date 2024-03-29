/* 배열의 요소 생성
* 객체가 동적으로 프로퍼티를 추가할 수 있듯이, 배열도 동적으로 배열 원소를 추가할 수 있다.
* 특히 자바스크립트 배열의 경우는 값을 순차적으로 넣을필요 없이 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다. */

/* 빈 배열 생성
* 배열 리터럴에서 대괄호만을 사용할 경우, emptyArr처럼 빈 배열이 생성된다.
* emptyArr는 요소가 없는 빈 배열이므로, emptyArr[0]와 같이 배열 원소에 접근해도 값이 없는 undefined 값이 출력된다.
* 객체도 그렇고 배열도 그렇고 값이 없는 원소에 접근하면 undefined값이 출력된다. */
var emptyArr = [];
console.log(emptyArr[0]);


/* 배열 요소 동적 생성
* 배열 요소에 값을 동적으로 추가했다.
* 배열 내에 추가하고자 하는 아무 위치에나 값을 저장하면 된다.
* 배열의 요소는 숫자나 문자열 같은 기본 타입의 값들을 포함해서, 객체나 함수, 배열 등과 같이 자바스크립트의 모든 데이터 타입의 값을 포함할 수 있다.
*   */
emptyArr[0] = 100;

emptyArr[3] = 'eight';
emptyArr[7] = true;

/* 8개의 배열 요소 값이 출력됨.
이것은 자바스크립트가 배열의 크기를 현재 배열의 인덱스 중 가장 큰값은 7이므로
총 배열의 요소개수는 인덱스 0부터 7까지 총 8개가 되는것이다.  */
console.log(emptyArr);

console.log(emptyArr.length);