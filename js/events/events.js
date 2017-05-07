/**
 * Created by anadrol on 7.5.2017 г..
 */

document.addEventListener('DOMContentLoaded', function () {

    var parentDiv = document.getElementById('parent');
    var childDiv = document.getElementById('child');

    //event.currentTarget
    parentDiv.addEventListener('click', function(e) {
        //console.log('currentTarget: ', e.currentTarget);
        alert('I am the parent');
        //console.log('currentTarget1: ', e.target);
    }, false);

    //event.target

    childDiv.addEventListener('click', alertAgain, false);

    childDiv.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('I am child');
        //console.log('currentTarget: ', e.target);
        //('I am the child');
    }, false);

    function alertAgain(e) {
        console.log('currentTarget: ', e.currentTarget);
        e.stopImmediatePropagation();
        alert('I am child again');
    }

    //remove EventListener
    childDiv.removeEventListener('click', alertAgain, false);



}, true);