/* splice() 메서드를 이용한 배열 프로퍼티 삭제 */

var arr = ['zero','one','two','three'];

// 2번째 요소를 시작점으로 1개의 원소를 삭제한다.
arr.splice(2,1);
// 2번째 요소가 아마.. arr[2]를 얘기하는거겠지..?
// ["zero","one","three"]
console.log(arr);
console.log(arr.length);