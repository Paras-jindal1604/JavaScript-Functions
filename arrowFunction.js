
//?  Arrow functio in JavaScript
// it helps to write shorter function syntax. we dont have to write "function" keyword.

const fun = () => {
    console.log("hello");
}

fun();


//^ If function has only one statement, and it returns a value, we can remove brackets and the return keyword.
// we can pass the parameters inside parenthesis.

const sum = (num1, num2) => num1 + num2;

console.log(sum(3,5));


//^ If function have only one parameter, we can skip the parentheses as well.

const cube = num => num*num*num;

console.log(cube(4));




//^ How to destructure an object inside function ?

const obj1 = {
    name : "batman",
    age : 23
};


// function oobj(obj){
//     console.log(obj.name, obj.age);
// }


// oobj(obj1);
// we can print the values of object we want by writing them as above.


// Destructuring inside function - 

function oobj({name,age}){
    console.log(name,age);
}

oobj(obj1);

// to destructure an object, write the keys we want inside parenthesis of function as parameters.



//^ NOTE - an object is "pass by reference" inside a function body.
// if any changes are made to object inside a function, then original object is also changed.

const obj2 = {
    a:1,
    b:2,
    c:3
};

function changes(obj){
    obj.a = 123;
    obj.b = 23;
    obj.c = 321;
}

changes(obj2);

console.log(obj2);




