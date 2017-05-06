/**
 * Created by anadrol on 6.5.2017 г..
 */

document.addEventListener('DOMContentLoaded', function() {

    var getInfo = new Function(['x', 'y'], 'console.log(x + y)');

    //getInfo(9, 4);

    //not working because of initialization is not hoisted yet
    //getUserData(10, 5);
    //working because of decalration is hoisted anywhere
    //priorData();
    //local scope variables with let
    if (true) {
        let x = 10;

        var p = x;
    }

    //console.log('p: ', p);

    var getUserData = function (x, y) {
        console.log(getUserData.caller); //function caller
    }

    function priorData() {
        var argumentsParent = arguments;
      //  getUserData();
        var testArray = ['ala', 'bala', 'nica'];
       // var arguments =  Array.prototype.slice.apply(arguments, []);
    }

    //priorData(1, 2, 3, 4, 5, 6);
    //console.log(priorData.length);

    var person = {
        name: 'Ivan',
        introduce: function (x) {
            console.log('i am ',this.name + x);
        }
    };

    var animal = {
        name: 'Lion'
    };

    //person.introduce('name');
    //function rest params with spread operator
    function restParams(...theArguments) {
        console.log('theArguments: ', theArguments);
    }

    //restParams(1, 2, 3, 4, 5);

    var closureExample = function() {
        var x = 10;
        console.log(x++);

        return function () {
            console.log('value of x: ', x++);
        }
    };

    closureExample();
    closureExample();

    //this example

    function thisExample() {
        console.log('this: ', this);
    }

    thisExample();




}, false);