var firstName = "John";
var lastName = 'Smith';
var age = 28;
var fullAge = true; 
var job, isMarried;
job = 'teacher';
isMarried = false; 
console.log(firstName + 'is a ' + age+ ' year old' + job + ' is he Married?' + isMarried);


/**************************
 * Basic Operators
 */
var now = 2019; 
var yearJohn = now - 27; 
var yearMark = now - 33; 
var markMass = 78;
var johnMass = 92; 
var markHeight = 1.69;
var johnHeight = 1.95; 

var johnBMI =  johnMass / (johnHeight*johnHeight);
var markBMI =  markMass / (markHeight*markHeight);
var higherBMI = markBMI > johnBMI;
//console.log('is Marks BMI is highter than Johns BMI?' + higherBMI);

var age = 18; 
var drinks = age>=18 ? 'beer' : 'juice'; 
age >= 18? console.log(firstName + ' drinks ' + drinks)
: console.log(firstName + ' drinks ' + drinks);

switch(job){
    case 'teacher':
        console.log(firstName + ' teaches kids.');
        break;
    case 'driver':
        console.log(firstName + ' drives car');
        break;
    case 'designer':
        console.log(firstName + ' designes ');
        break;
    default:
        console.log(firstName+ ' does nothing');
    }

    // falsy values: undefined, null, 0, '', nan;
    //truthy value: not falsy values; 

    var height=23; 
    if(height || height === 0 ){
        console.log('variable is defined');
    }else{
        console.log('variable is not defined');
    }
    if(height=='23' ){
        console.log('double equal doesn\'t match variable type.');
    }if(height===23){
        console.log('three equal match variable type.');
    }

    var johnTeamAVG = (89+120+103)/3, mikeTeamavg = (116+94+123)/3;
    var maryTeamAvg = (97+134+185)/3;
    if(johnTeamAVG>mikeTeamavg){
        console.log('John team is the Winner.' + johnTeamAVG);
    }else if(mikeTeamavg>johnTeamAVG){
        console.log('Mike team won.' + mikeTeamavg);
    }
    
    function calculateAge(birthYear){
        return 2019-birthYear;
    }

    console.log(calculateAge(1992));
function yearsUntilRetire(year, firstName){
    var age = calculateAge(year);
    var retirement = 65-age; 
    console.log(firstName+' retires in ' + retirement +' years');
}

yearsUntilRetire(1992, 'Ankit');

//function declaration
//function whatYouDo(job, firstNam){}

//function Expression
var whatYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids.';
        case 'driver':
            return firstName + ' drives car';
        case 'designer':
            return firstName + ' designes ';
        default:
           return firstName+ ' does nothing';
        }
}

console.log(whatYouDo('teacher','Ankit'));

var names=['Ankit','John', 'Mark'];

var years= new Array(1992,1969,1948);

console.log(names + years[0]);
names[3] = 'Ben';
names.push('Mery');
names.shift('Smith');
console.log(names);
names.pop();
console.log(names.indexOf('Ben'));
console.log(names);



function tipCalculator(ttl){
    var percentage;
    if(ttl<50){
        percentage = .2
    }
    else if(ttl>=50&& ttl<200){
        percentage = .15
    }
    else{
        percentage = .10
    }
    return percentage*ttl;
}
var tips=[];
var bills  = [];
console.log(tipCalculator(100));
bills=[124,48,268];
tips =[tipCalculator(bills[0]),
    tipCalculator(bills[1]),
        tipCalculator(bills[2])];
console.log(bills);
console.log(tips);


/***************************
 * object and its properties
 */

 //object literal
 var john = {
     firstName : 'John',
     lastName : 'Smith',
     birthYear : 1990,
     family :['Jane','Mark','Bob','Emily'],
     job: 'Teacher',
     isMarries : false
 };
console.log(john.firstName);
console.log(john['lastName']);

//new object syntax
var jane = new Object();
jane.firstName = 'jane';
jane.lastName = 'Smith';
jane.birthYear = 1990;

/**
 * object and methods
 */

var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1992,
    family :['Jane','Mark','Bob','Emily'],
    job: 'Teacher',
    isMarries : false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log('age ' + john.age);


var mark={
    fullName: "Mark Smith",
    mass:   10,
    height: 1.8,
    calcBMI: function(){
        this.bmi =this.mass/(this.height * this.height); 
    }
};

var jon={
    fullName: "John Smith",
    mass:   20,
    height: 1.6,
    calcBMI: function(){
        this.bmi =this.mass/(this.height * this.height); 
    }
};

var markBMI = mark.calcBMI();
var jonBMI = jon.calcBMI();
console.log(mark.bmi);
console.log(jon.bmi);
if(mark.bmi>jon.bmi){
    console.log(mark.fullName+' has '+ mark.bmi+'. and It is higher than ' +jon.fullName);
}
else if(mark.bmi<jon.bmi){
    console.log(jon.fullName+' has '+ jon.bmi+'. and It is higher than ' +mark.fullName);
}
else{
    console.log('Both persons BMI is equal');
}



var bills=[];

var john={
    fullName: 'John Smith',
    billamount:[124,40,268,180,42],
    calcTips: function(){
        this.tips=[];
        this.finalbill=[];
       for(var i=0; i<this.billamount.length;i++){
           var percentage; 
           var bill = this.billamount[i];
        if(bill<50){
            percentage = .2
        }
        else if(bill>=50&&bill<200){
            percentage = .15
        }
        else{
            percentage = .1
        }
        this.tips[i] = bill *percentage;
        this.finalbill[i] = bill + (bill*percentage);
       } 
    }
};

john.calcTips();
console.log(john);




































































