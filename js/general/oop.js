
var Animal = (function() {

    function Animal(name, age) {
        //To protect input data make a params validation
        this._name = name;
        this._age = age;
    }

    Object.defineProperty(Animal.prototype, 'name', {
        get: function() {
            return this._name;
        },
        set: function(value) {
            if (typeof value === 'string') {
                this._name = value;
            } else {
                throw new Error('invalid value');
            }
        }
    });

    Object.defineProperty(Animal.prototype, 'age', {
        get: function() {
            return this._age;
        },
        set: function(value) {
            if (typeof value === 'number') {
                this._age = value;
            } else {
                throw new Error('invalid value');
            }
        }
    });

    Animal.prototype.present = function(value) {
      console.log('My name is: ', value);
    };

    return Animal;

}());

// var lion = new Animal(43, 'gosho');
// lion.name = 45;
// console.log('lion: ', lion);

var Plant = (function(parent) {

    function Plant(type, name, age) {
        this._type = type;
        parent.apply(this, [name, age]);
    }

    Plant.prototype = Animal.prototype;
    Plant.constructor = Plant;

    Plant.prototype.introduce = function() {
        console.log(this._type);
    };

    return Plant;

}(Animal));

var lion = new Animal('lion', 344);
var tree = new Plant('tree', 'Ivan', 34);



