/* 배열 length 프로퍼티의 명시적 변경 */

/* 배열 리터럴로 원소를 3개 가지고 있는 배열 arr을 생성한다. arr.length의 초기값은 3이다. */
var arr = [0,1,2];
console.log(arr.length);

/* arr.length의 값을 임의로 5로 수정했다. 이렇게 되면 length가 가리키는 위치가 변경된다.
* 원소가 할당되지 않은 3,4번 인덱스는 undefined로 출력된다. */
arr.length = 5;
console.log(arr);

/* 이번에는 length 프로퍼티 값을 2로 설정했다. 이 경우에는 length프로퍼티를 벗어나는 인덱스 값이 실제로 삭제된다. */
arr.length = 2;
console.log(arr);
console.log(arr[2]);