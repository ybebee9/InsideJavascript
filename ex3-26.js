/* 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출 */

var arr = ['bar'];
var obj = {name : 'foo', length: 1};

arr.push('baz');
console.log(arr);

Array.prototype.push.apply(obj, ['baz']);
Array.prototype.push.apply(obj, ['bax']);
console.log(obj);

/* arguments 객체나 jQuery 객체가 유사 배열 객체 형태로 되어있다.  */