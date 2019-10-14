function func(arg1,arg2) {
    console.log(arg1,arg2);
}

/* 자바스크립트는 인자를 어떻게 넘기더라도 함수를 호출할 때 에러가 발생하지 않는다. */

/* 넘겨지지 않은 인자는 undefined값이 할당됨 */
func(); // undefined undefined
func(1); // 1 undefined
func(1,2); // 1 2

/* 초과된 인수는 무시됨 */
func(1,2,3); // 1 2