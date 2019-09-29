/* Function() 생성자 함수를 통한 함수 생성하기 */

/* 함수 선언문이나 함수 표현식 방식도 Function() 생성자 함수가 아닌 함수 리터럴 방식으로 함수를 생성하지만,
*  결국엔 이 또한 내부적으로 Function() 생성자 함수로 함수가 생성된다고 볼 수 있다. */

var add = new Function('x','y','return x+y');
console.log(add(3,4));
