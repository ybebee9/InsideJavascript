/* 배열과 객체
* 자바스크립트에서 배열 역시 객체다.
* 하지만 배열은 일반 객체와는 약간 차이가 있다. */

// 배열과 객체의 유사점과 차이점


/* 1. 배열과 객체생성
* colorsArray 배열의 형태와 유사하게 객체 리터럴 방식으로 colorObj 객체를 생성했다.
* 둘다 비슷하게 원소가 3개가 있고, 결과값 역시 비슷하게 출력된다.
* 객체의 프로퍼티에 접근할 때는 대괄호 안에는 접근하려는 프로퍼티의 속성을 문자열 형태로 적어야한다.
* colorsObj[0]이 아니라 colorsObj['0']의 형태로! but colorsObj[0]의 결과가 'orange'로 정상적으로 출력되는 이유는
* 자바스크립트 엔진이 [] 연산자 내에 숫자가 사용될 경우, 해당 숫자를 자동으로 문자열 형태로 바꿔주기 때문이다. */

// colorsArray 배열
var colorsArray = ['orange','yellow','green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);

// colorsObj 객체
var colorsObj = {
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

// typeof 연산자 비교
/* typeof 연산 결과는 배열과 객체가 모두 object다. 즉 자바스크립트도 배열을 객체라고 생각한다. */
console.log(typeof colorsArray);
console.log(typeof colorsObj);

// length 프로퍼티
/* 배열 colorsArray와 객체 colorsObj는 근본적인 차이가 있다.
* 우선 colorsObj는 객체이므로 length 프로퍼티가 존재하지 않는다.
* 때문애 배열 colorsArray.length는 3이라는 결과가 출력되지만
* colorsObj.length는 undefined가 출력된다.  */
console.log(colorsArray.length);
console.log(colorsObj.length);

// 배열 표준 메서드
/* 배열과 객체의 또하나 차이점은 colorsObj는 배열이 아니므로 push()와 같은 표준 배열 메서드를 사용할 수 없다.
* colorsObj.push()메서드를 실행할 경우 객체는 push() 메서드가 없으므로 에러가 발생한다.
* 이것은 배열과 객체가 자신의 부모인 프로토타입 객체가 서로 다르기 때문이다. */
colorsArray.push('red');
colorsObj.push('red');
