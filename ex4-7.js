/* 함수 표현식 방식과 함수 호이스팅 */

// 함수가 생성되기 전이므로 uncaught type error 발생
add(2,3); // uncaught type error

// 함수 표현식 형태로 add()함수 정의
var add = function (x,y) {
    return x + y ;
}

// 함수가 생성된 후에는 정상적으로 동작
add(3,4); // 7


/* 함수 표현식 형태로 add 함수가 생성되었으므로 add(2,3)에서 호이스팅이 발생하지 않고 uncaught error가 발생한다. */
