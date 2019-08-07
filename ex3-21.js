/* 배열의 프로퍼티 열거
*  객체는 for in 문으로 프로퍼티를 열거한다고 설명했다.
* 배열도 객체이므로 for in 문을 사용해서 배열 내의 모든 프로퍼티를 열거할 수 있지만,
* 이렇게 되면 불필요한 프로퍼티가 출력될 수 있으므로 되도록 for문을 사용하는것이 좋다. */

// 배열생성
var arr = ['zero','one','two'];

// 프로퍼티 동적 추가
/* 배열의 프로퍼티를 동적으로 추가해도 length는 바뀌지 않음
* 배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변경되었을 경우에만 변경됨 */
arr.color = 'blue';
arr.name = 'number_array';

// 배열 원소 추가
arr[3] = 'red';

// for in 문은 배열내의 모든 프로퍼티 출력됨
for(var prop in arr){
    console.log(prop, arr[prop]);
}

// for문은 배열의 인덱스 요소들만 출력됨
for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}