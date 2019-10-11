

// self() 함수

var self = function () {
    console.log('a');

    return function () {

        console.log('b');

        return function () {
            console.log('c');
        }
    }
}

self = self();
self = self();
self();
