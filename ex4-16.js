
/* 	즉시실행 함수 만드는 방법	: 함수 리터럴을 괄호()로 둘러싼다. 이때 함수 이름이 있든 없든 상관 없다.*/

(function (name) {
    console.log('This is the immediate function -->' + name);
})('foo'); // ('foo')로 즉시 실행 함수를 호출했으며, 이때 'foo'를 인자로 넘겼다. 이 값은 name 매개변수로 넘겨지게 된다.
