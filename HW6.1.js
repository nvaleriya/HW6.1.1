let firstName = "Valeriya";
let lasName = "Rosenthal";
let greeting = "Hallo," + " " + firstName + " " + lasName; 
console.log(greeting);

let month = 8; 

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Некорректное значение месяца");
        break;
}

let sentencePart1 = "Ich Liebe";
let sentencePart2 = " programmieren";
let completeSentence = sentencePart1 + sentencePart2;
console.log(completeSentence)

let dayOfWeek = 4;

switch(dayOfWeek) {
    case 1:
        console.log("Montag")
        break;
    case 2:
        console.log("Dienstag")
        break;
    case 3:
            console.log("Mittwoch")
            break;
    case 4:
            console.log("Donnerstag")
            break;
    case 5:
            console.log("Montag")
            break;
    case 6:
            console.log("Dienstag")
            break;
    case 7:
            console.log("Montag")
            break;
    default:
            console.log("kein Wochentag")
            break;        
                      
}
