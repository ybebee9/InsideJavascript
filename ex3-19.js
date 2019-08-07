/* 배열의 프로토타입과 객체 프로토타입 비교 */

// 배열 리터럴을 통한 빈 배열 생성
var emptyArray = [];

// 객체 리터럴을 통한 빈 객체 생성
var emptyObj = {};

// 배열의 프로토타입 (Array.prototype) 출력
/* Array.prototype에는 __proto__ 프로퍼티가 있다. 이 값은 Object.prototype 을 가리킨다 */
console.dir(emptyArray.__proto__);

// 객체의 프로토타입 (Object.prototype) 출력
console.dir(emptyObj.__proto__);