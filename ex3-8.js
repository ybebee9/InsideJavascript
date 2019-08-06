/* for in 문을 사용하면, 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.
* for in 문을 이용해서 foo 객체의 모든 프로퍼티 이름과 프로퍼티 값을 출력하는 예제 */

// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name : 'foo',
    age : 30,
    major : 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;

/* for in 문이 수행되면서 prop 변수에 foo 객체의 프로퍼티가 하나씩 할당된다.
* prop에 할당된 프로퍼티 이름을 이용해서 foo[prop]와 같이 대괄호 표기법을 이용해서 프로퍼티 값을 출력한다.
* 즉 prop 변수에 할당되는건 foo 객체의 프로퍼티 이름이 할당되는것이다. */
for(prop in foo){
    console.log(prop, foo[prop]);
}


/* 객체 프로퍼티 삭제
* 자바스크립트에서는 객체의 프로퍼티를 delete라는 연산자를 이용해 즉시 삭제할수있다.
* 여기서 주의할점은 delete 연산자는 객체의 프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지는 못한다.*/


var foo1 = {
  name: 'foo1',
  nickname: 'babo'
};

console.log(foo1.nickname);
delete foo1.nickname;
console.log(foo1.nickname); // undefined 값 출력, 자바스크립트에서는 존재하지 않는 프로퍼티에 접근할 경우 undefined라는 값이 출력된다.

delete foo1;
console.log(foo1.name);