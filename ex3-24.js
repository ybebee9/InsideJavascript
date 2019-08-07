/* Array() 생성자 함수를 통한 배열 생성 */

// foo 배열의 경우 생성자 함수를 호출할 때 3이라는 숫자 인자 1개만 넘겼으므로,
// 앞서 설명한것처럼 3개의 요소가 있는 빈 배열을 생성한다.
var foo = new Array(3);
console.log(foo);
console.log(foo.length);

// bar 배열의 경우 Array(1,2,3)와 같이 호출했으므로 1,2,3 세개의 숫자가 요소인 배열이 생성된것이다.
var bar = new array(1,2,3);
console.log(bar);
console.log(bar.length);