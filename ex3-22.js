/* delete 연산자를 이용한 배열 프로퍼티 삭제 */

var arr = ['zero','one','two','three'];

// arr[2]항목 삭제
delete arr[2];

// ["zero","one","two","three"];
console.log(arr);

// 4 출력됨
console.log(arr.length);

/* delete arr[2]로 배열의 요소를 삭제하면, arr[2]에 undefined 값이 할당되게 된다.
* 그러나 delete 연산자로 배열 요소 삭제 후에도 배열의 length는 변하지 않는다.
* delete 연산자는 해당 요소의 값을 undefined로 설정할 뿐, 원소 자체를 삭제하지는 않는다.
* 때문에 보통 배열에서 요소들을 완전히 삭제할 경우 자바스크립트에서는 splice() 배열 메서드를 사용한다. */