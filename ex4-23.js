
// myObject 객체 생성
var myObject = {
    name : 'foo',
    // 객체 프로퍼티가 함수일 경우, 이 함수를 메서드라고 부름
    sayName : function () {
        // 메서드 호출할 때, 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩 됨.
        console.log(this.name);
    }
};

// otherObject 객체 생성
var otherObject = {
    name : 'bar'
};

// otherObject.sayName() 메서드
otherObject.sayName = myObject.sayName;

// sayName() 메서드 호출
myObject.sayName(); // foo
otherObject.sayName(); // bar