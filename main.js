/*const person = {
    firstName: 'john',
    lastname: 'doe',
    Age: 30,
    hobbies: ['anime', 'volleyball', 'cooking'],
    address: {
        street: 'Vergara Street',
        city: 'Batangas City',
        province: 'Batangas',

    }
}
person.email = 's.marcelbautista@gmail.com'
console.log(person);*/
/*
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'buy groceries',
        isCompleted: false
    },
    {
        id: 3,
        text: 'clean the house',
        isCompleted: true
    }
]; */

/*const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

//While
let i = 0
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}*/
/*
for(let todo of todos){
    console.log(todo.text);
}*/

/* foreach, map, filter*/
/*
 const x = 15;

 if(x == 10) {
    console.log('x is 10');
 } else{ 
    console.log('X IS NOT 10');
 }*/
 /*const x = 9;

 const color = x > 10 ? 'red' : 'blue';
 

 switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
 }*/
/*
const addNums = (num1 = 1, num2 = 1) => num1 + num2

console.log(addNums(5,5));*/
// constructor function
/*function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date (dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
   }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
//Instantiate object
const person1 = new Person ('Marcel', 'Bautista', '4-21-2003');

 console.log(person1.getFullName());
 console.log(person1);*/
 


 //Single Element
//console.log(document.getElementById('my-form'));
//console.log(document.querySelectorAll('.item'));
 //Multiple Element console.log(document.querySelectorAll('.item'));

 /*const items = document.querySelectorAll('.item');

 items.forEach((item) => console.log(item));*/

 //const ul = document.querySelector('.items');
    
//ul.remove();
//ul.lastElementChild.remove();
/*ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = `<h1>Hello</h1>`

const btn = document.querySelector('.btn');
btn.style.background = 'coral';*/

/*const btn = document.querySelector('.btn');
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value ===  ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';

        setTimeout(() => msg.remove(), 3000)
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}