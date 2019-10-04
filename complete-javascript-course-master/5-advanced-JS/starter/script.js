//JS two types of values. 
/*
Primitives: number, string, boolean, undefined, null
Everything else: array, Func,obj,Dates,Wrapperfor numbers. 

OBJECT ORIENTED PROGRAMMING
Obj interacting with one another through method and properties. 
used to store data, structure app into modules, keeping code clean.

******JS inheritance is possible with prototype. ******
Every JavaScript object has a prototype property,
    which makes inheritance possible in JavaScript.

The prototype property of an object is where we put methods and properties
    that we want other objects to inherit.

The Constructor's prototype property is not the prototype of the Constructor itself,
    but it's the prototype of all instances that are created through it.
 
When a certain method, or property, is called, the search starts in the object itself,
    and if it cannot be found there, the search moves up on to the object's prototype.
    This continues until the method is found. And this is the prototype chain.
    */

 //fucntion Constructor 
/*
 var john = {
     name:'john',
     yearOfBirth:1992,
     job: 'teacher',
 };


var Person= function(name, yearOfBirth, job){
    this.name= name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
}
Person.prototype.lastName  = 'smith';

var john = new Person('John',1992,'Teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark',1948,'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/ 
 


//object.create
/*
var personProto={
    calculateAge: function(){
        console.log(2019-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1992;
john.job = 'Teacher';

var jane = Object.create(personProto,
    {
        name:{value:'Jane'},
        yearOfBirth:{value:1969},
        job:{value:'designer'},
    });

*/
//PRIMITIVES VS OBJECT

//primitives
var a = 23;
var b = a;
a= 46;
console.log(a);
console.log(b);
//objects
var obj1={
    name:'John',
    age:26,
};
var obj2=obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);

//function
var age= 27;
var obj={
    name:'Ankit',
    city:'Secaucus',
};
function change(a,b){
    a=30;
    b.city='NYC';
}
change(age, obj);
console.log(age);
console.log(obj.city);


/*
Func is an instance of object type. 
Func behaves like any other object. 
we can store functions in a variable
we can pass function as an argument to another func. 
we can return function from a function. 

var years=[1992,1965,1937,2005,1998];

function arrayCalc(arr, fn){
    var arrResults=[];
    for(var i=0;i < arr.length ; i++){
        arrResults.push(fn(arr[i]));
    }
    return arrResults;
}

function calculateAge(el){
    return 2019-el;
}

function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){
    if(el>=18&&el<=81){
        return Math.round(206.9-(0.67*el));
    }else {
        return -1;
    }    
}

var ages = (arrayCalc(years,calculateAge));
var fullages = (arrayCalc(ages,isFullAge));
var maxHR = (arrayCalc(ages,maxHeartRate));
console.log(ages);
console.log(fullages);
console.log(maxHR);
*/

/*******************
 * function returning another function. 
 */
/*
function interviewQuestion(job){
    if(job=== 'designer'){
        return function(name){
            console.log(name+', can you please explain whats UX design is?');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log(name +' What subject do you teach?');
        }
    }else {
        return function(name){
            console.log("Hello "+name+ " what do you do?");
        }
    }
}


var teacherQuestion=interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion=interviewQuestion('Designer');
designerQuestion('John');
interviewQuestion('teacher')('Mark');
*/

/*******************
 * Functon Expression (IIFE)
 */

 function game(){
     var score= Math.random() *10;
     console.log(score>=5);
 }
game();


(function(){
    var score= Math.random() *10;
    console.log(score>=5);
})();


(function(goodluck){
    var score= Math.random() *10;
    console.log(score>=5-goodluck);
})(5);


/**
 * Closoures
 An Inner func has always access to the variables and paramter 
 of its outer fun, even after outer func has returned. 
*/

 /*function retirement(retirementAge){
     var a=' years left until retirement.';
     return function(yearOfBirth){
         var age = 2016-yearOfBirth;
         console.log((retirementAge-age)+a);
     }
 }
var retirementUS = retirement(66);
retirementUS(1992);
retirement(66)(1992);
var retirementGermany = retirement(66);
var retirementIceland = retirement(67);
retirementGermany(1990);
retirementIceland(1990)



function interviewQuestion(job){
    return function(name){
        if(job=== 'designer'){
                console.log(name+', can you please explain whats UX design is?');    
        }else if(job==='teacher'){
                console.log(name +' What subject do you teach?');
        }else {
                console.log("Hello "+name+ " what do you do?");
        }
    }
}

interviewQuestion('teacher')('Ankit');

*/

/**
 * Bind, call and Apply
 */

 var john={
     name: 'John',
     age:26,
     job: 'Teacher',
     presentation: function(style,timeOfDay){
         if(style==='formal'){
             console.log('Good '+timeOfDay + ', Ladies and Gentlemen:'
             +'I\'m '+this.name);
         }else if(style==='friendly'){
            console.log( 'Hey whats up?, Ladies and Gentlemen:'
            +'I\'m'+this.name);
         }
     }
 }

 var emily={
    name: 'Emily',
    age:25,
    job: 'Designer',
 };
john.presentation('formal','morning');

john.presentation.call(emily,'friendly','afternoon');

//only if the metod accepts array
//john.presentation.apply(emily,['friendly','afternoon'])

var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('night');



var years=[1992,1965,1937,2005,1998];

function arrayCalc(arr, fn){
    var arrResults=[];
    for(var i=0;i < arr.length ; i++){
        arrResults.push(fn(arr[i]));
    }
    return arrResults;
}

function calculateAge(el){
    return 2019-el;
}

function isFullAge(limit,el){
    return el>=limit;
}

var ages=arrayCalc(years,calculateAge);

var fullJapan= arrayCalc(ages,isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);



(function (){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion=
    function(){
        console.log(this.question);
        for(var i=0;i<this.answers.length;i++){
            console.log(this.answers[i]);
        }
    }
    Question.prototype.checkAnswer=
    function(ans){
        if(ans === this.correct){
            console.log("correct Answer");
        }else {
            console.log("Wrong Answer");
        }
    }
    var q1 = new Question("Is JS the coolest programming language in the world",
            ['Yes','No'],0);
    var q2 = new Question('What is my Name?',['Ankit',"john",'Mike'],0);
    var q3 = new Question('What does best describe coding?',
    ['boring','fun','hard'],1);
    
    var questions=[q1,q2,q3];
    var qnum= Math.floor(Math.random()*questions.length);
    
    questions[qnum].displayQuestion();
    var ans=parseInt(prompt('Please select the correct answer.'));
    questions[qnum].checkAnswer(ans);
    
})();















































