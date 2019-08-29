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
    