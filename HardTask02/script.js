let lang = prompt("Ввыедите 'ru' или 'en'");
console.log('\n Через if else');
if(lang == "ru"){
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
}else if(lang == "en"){
    console.log("Sunday");
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wednesday");
    console.log("Thursday");
    console.log("Friday");
    console.log("Saturday");
} else {
    console.log("Ввели что-то не то.")
}
console.log('\n Через switch case');
switch(lang){
    case "ru":{
        console.log("Понедельник");
        console.log("Вторник");
        console.log("Среда");
        console.log("Четверг");
        console.log("Пятница");
        console.log("Суббота");
        console.log("Воскресенье");
        break;
    }
    case "en":{
        console.log("Sunday");
        console.log("Monday");
        console.log("Tuesday");
        console.log("Wednesday");
        console.log("Thursday");
        console.log("Friday");
        console.log("Saturday");
        break;
    }
}
console.log('\n Через массив');
let arr = [];
arr.ru = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
arr.en = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(i = 0; i < 7; i++){
    console.log(arr[lang][i]);
}


let namePerson = prompt("Как вас зовут");
let answer = (namePerson == 'Артем') ? 'директор' :
  (namePerson == 'Максим') ? 'преподаватель' :
  'студент' ;
console.log(answer);


