function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function primos(num){
    
    for(let j = 2; j< num; j++){
        
        if(num % j === 0){
           return false;
            }
    }
    
    return num !== 1;
}

