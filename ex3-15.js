/* 배열의 length 프로퍼티 변경 */

var arr = [];
console.log(arr.length);

arr[0] = 0;
arr[1] = 1;
arr[2] = 2;
arr[100] = 100;
console.log(arr.length);
