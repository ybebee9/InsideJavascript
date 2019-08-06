/* 자바스크립트에서는 숫자, 문자열, boolean, null, undefined 5가지를 제외한 모든 값은 객체다.
* 배열이나 함수 또한 객체로 취급된다. 이러한 객체는 자바스크립트에서는 참조타입이라고 부른다.
* 이것은 객체의 모든 연산이 실제값이 아닌 참조값으로 처리되기 때문이다. */

// 동일한 객체를 참조하는 두 변수 objA와 objB

/* 1.객체를 리터럴 방식으로 생성했다.
* 여기서 objA변수는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체를 가리키는 참조값을 저장하고 있다. */
var objA = {
    var : 40
};
/* 2.변수 objB에 objA값을 할당한다. objA는 1에서 생성된 객체를 가리키는 참조값을 가지고 있으므로 변수 objB에도 이같은 객체의 참조값이 저장된다.
* objA와 objB변수가 동일한 객체를 가리키는 참조값을 가지게 된다. */
var objB = objA;

console.log(objA.var); //40
console.log(objB.var); //40

/* 변수 objB가 가리키는 객체의 val 값을 40에서 50으로 갱신했다. 이때 변수 objA도 변수objB와 동일한 객체를 참조하고 있으므로 a.val 값이 50으로 변경된다. */
objB.var = 50;
console.log(objA.var); //50
console.log(objB.var); //50