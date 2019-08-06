/* push()메서드와 length 프로퍼티 */

/* arr은 3개의 문자열을 원소로 가진 배열 */
var arr = ['zero','one','two'];

/* push()메서드 호출
* 여기서 push()메서드로 arr[3] 위치에 'three'문자열을 저장함으로써 배열의 끝에 원소를 추가했다. */
arr.push('three');
console.log(arr);

// length 값 변경 후, push() 메서드 호출
/* 이때 arr.length 프로퍼티 값을 임의로 5로 바꾼후 push() 메서드를 이용해서 'four' 문자열을 추가하게되면
* length는 6이 된다.
* 배열의 length 프로퍼티는 배열 메서드 동작에 영향을 줄 수 있을만큼 배열에서는 중요한 프로퍼티다. */
arr.length = 5;
arr.push('four');
console.log(arr);