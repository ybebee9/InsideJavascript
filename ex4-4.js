/* 함수 표현식 방식으로 구현한 팩토리얼 함수 */

var factorialVar = function factorial(n){

    if(n <= 1){
        return 1;
    }

    return n * factorial(n-1);
}

/* 결과값 6 출력
* 함수 외부에서는 함수변수 factorialVar()로 함수를 호출했지만 함수 내부에서 이뤄지는 재귀호출은 factorial() 함수 이름으로 처리 */
console.log(factorialVar(3));


/* factorial is undefined 호출
* factorial()로 함수 외부에서 해당 함수를 호출하지못해 에러가 발생한다 */
console.log(factorial(3));



/* 함수 선언문 방식으로 선언된 함수의 경우는 함수 끝에 세미콜론(;) 을 붙이지 않는다.
*  함수 표현식 방식으로 선언된 함수의 경우는 함수 긑에 세미콜론(;)을 붙이는것을 권장한다. */