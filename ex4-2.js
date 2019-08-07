/* 함수 표현식 방식으로 함수 생성하기
* 자바스크립트에서는 함수도 하나의 값처럼 취급된다.
* 함수도 숫자나 문자열처럼 변수에 할당하는것이 가능하다.
* 이런 방식으로 함수 리터럴로 하나의 함수를 만들고, 여기서 생성된 함수를 변수에 할당하여 함수를 생성하는것을 함수 표현식이라고 한다. */

/* 함수 표현식은 함수 선언문 문법과 거의 유사하다.
* 유일한 차이점은 함수 표현식 방법에서 함수이름이 선택사항이며 보통은 사용하지 않는다.  */

// add() 함수 표현식
/* add 변수는 함수 리터럴로 생성한 함수를 참조하는 변수이지, 함수명이 아니라는점에 주의해야한다.
* add와 같이 함수가 할당된 변수를 함수변수라고 부르자 */
var add = function(x,y){
    return x + y;
}

/* 함수 변수 add는 함수의 참조값을 가지고 있으므로 또 다른 변수 plus에도 그 값을 그대로 할당할 수 있다. */
var plus = add;

/* 함수 표현식으로 생성된 함수를 호출하려면 함수 변수를 사용해야 한다. */
console.log(add(3,4));

/* plus 또한 add 함수 변수와 같은 함수를 참조하는 함수변수이므로 plus(5,6)과 같은 형태로 함수를 호출하는것이 가능하다. */
console.log(plus(5,6));

/* add와 plus함수 변수는 두개의 인자를 더하는 동일한 익명함수를 참조한다. */


/* 함수 변수 add가 실제로 참조하는 두 수를 더하는 함수의 이름이 없다. 이렇게 이름이 없는 함수를 익명함수라고 부른다.
* 즉, 인자로 넘겨진 두 수를 더하는 익명함수를 만들고 이를 add 변수에 할당한것이다. */