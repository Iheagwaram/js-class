// JS RECAP
// var fullName = 'David Tochukwu';
// var age = 25
// var married = false
// var accountNumber10 = null
// var accountBalance = undefined;
// var cp = 500000
// var sp = 10000000

// var name = 'Kitan';
// var job = 'stripper'
// var salary = 8000
// var club = 'club234'

// var sentence = 'My name is ' + name + ' I am a ' + job + ' I earn $ ' + salary + ' at ' + club;
// // console.log(sentence);
// let sentence2 = `My name is ${name} I am a ${job} I earn $ ${salary} at ${club}`
// console.log(sentence2);

// var sentence3 = `My name is ${fullName} and I am ${age} and what people say about my marriage is ${married}`
// console.log(sentence3)
// if(salary < 20000){
//     console.log('she is a poor stripper')
    
// }else{
//     console.log('This is a rich stripper')
    
// }
// salary > 20000 ? console.log('Poor Stripper') : console.log('Rich Stripper');

// function profit(sp, cp){
//     var sub = sp - cp
//     return console.log(sub);
// }
// // profit(10000000,500000)

// function areaOfRectangle(L,l){
//     var areaOfRectangle = L*l
//     return console.log(areaOfRectangle);
// }
// areaOfRectangle(100,95)

// function areaOfCylinder(r,h){
//     var areaOfCylinder = 2*(Math.PI)*r*h
//     return console.log(areaOfCylinder);
    
// }
// areaOfCylinder(4,8)

// function greeting(){
//     return console.log('Hello Everybody');
// }
// greeting()

// function saybaba(name){
//     return console.log('Hello ' + name);
// }
// saybaba('David')

// function gang(name, course, job, firm){
//     return console.log('My name is ' + name + ', I am studying ' + course + ' and I want to work as a ' + job + ' at ' + firm);
// }
// gang('David', 'Software Development', 'Backend Developer', 'Google')

// var movies = ['God is not dead', 'spiderman', 'Ironman', 'Green Lantern', 'Batman', 'Captain America']
// // console.log(movies[2]);
// movies[1] = 'Osofia in london'
// movies.push('Spartacus')
// movies.unshift('24hrs Chrono')
// movies.pop('Spartacus')
// movies.push('Nazaland')
// console.log(movies);

var employee = {
    fullName : 'Chukwuemeka Abiodun',
    email : 'chukwuemaka@gmail.com',
    phone : 90000000,
    married : true,
    age : 26,
    skills : ['expert communicator', 'cooking', 'driving'],
    address : {
        number: 4,
        street: 'Durojaiye',
        city: 'Lagosmainlaind',
        state: 'Lagos',
        country: 'Nigeria',
    },
    salary : 200000,
    mortgage : function(){
        return (this.salary*(30/100)); 
    },
    tax : function(){
        return this.salary*(12.5/100)
    },
    tithe : function(){
        return this.salary*(10/100)
    }
}
// console.log(employee.skills);
// employee.skills[0] = 'leadership'
console.log(employee.tithe());
