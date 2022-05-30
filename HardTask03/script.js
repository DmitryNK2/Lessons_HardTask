function fu(arg){
    if(typeof arg == "string"){
        arg = arg.trim();
        if(arg.length > 30){
            arg = arg.substring(0, 30) + "...";  
        }   
        console.log(arg);    
    }
    else{
        console.log('Тип данных не string');
    }
}
fu(prompt('Введите аргумент'));