var person1 = {
    name: 'Ivan',
    introduce: function(a, b) {
        console.log('My name is: ', this.name + a + b);
    }
};
var person2 = {
    name: 'Gosho'
};

var x = person1.introduce.bind(person2, 'test', 'kur');

x();


