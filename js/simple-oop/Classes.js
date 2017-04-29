document.addEventListener('DOMContentLoaded', function () {

    var Animal = (function () {

        function Animal(age) {
            this._age = age;
        }

        Object.defineProperty(Animal.prototype, 'age', {
            get: function () {
                return this._age;
            },
            set: function (value) {
                this._age = value;
            }
        });

        Animal.prototype.sleep = function () {
            console.log('zzzzzz');
        };

        Animal.prototype.eat = function () {
            console.log('yummy');
        };

        return Animal;
    }());

    var Dolphin = (function (parent) {

        function Dolphin(age) {
            parent.apply(this, [age]);
        }

        Dolphin.prototype = Animal.prototype; //classical inheritance
        Dolphin.constructor = Dolphin;

        Dolphin.prototype.swim = function () {
            console.log('splah');
        };

        return Dolphin;

    }(Animal));

    var Lion = (function (parent) {

        function Lion(age) {
            parent.apply(this, [age]);
        }

        Lion.prototype = Object.create(Animal.prototype); //prototype inheritance
        Lion.constructor = Lion;

        Lion.prototype.roar = function () {
            console.log('wrrrrr');
        };

        return Lion;

    }(Animal));
    var Eagle = (function (parent) {

        function Eagle(age) {
            parent.apply(this, [age]);
        }

        Eagle.prototype = Object.create(Animal.prototype); //prototype inheritance
        Eagle.constructor = Eagle;

        Eagle.prototype.fly = function () {
            console.log('whoohooo');
        };

        return Eagle;

    }(Animal));
    var Bee = (function (parent) {

        function Bee(age) {
            parent.apply(this, [age]);
        }

        Bee.prototype = Object.create(Animal.prototype); //prototype inheritance
        Bee.constructor = Bee;

        Bee.prototype.fly = function () {
            console.log('whoohooo');
        };

        return Bee;

    }(Animal));

    var animal = new Animal(5);
    var dolphin = new Dolphin(47);
    var lion = new Lion(34);
    var bee = new Bee(14);
    var eagle = new Eagle(100);

    console.log(animal);
    console.log(dolphin);
    console.log(lion);
    console.log(bee);
    console.log(eagle);



}, false);