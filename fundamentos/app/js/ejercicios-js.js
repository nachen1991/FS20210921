function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function array(num){
   let array = new Array();
    for(let i = 0;i<=num - 1;i++){
    array[num] = [0];    

    }
    return array[num];
    
}

function primos(num){
    
    for(let j = 2; j< num; j++){
        
        if(num % j === 0){
           return false;
            }
    }
    
    return num !== 1;
}
function reverse(c){
    return c.split("").reverse().join("");
    
    
}
function validaPalindromo(caso){
    let result;
    let cminus = caso.toLowerCase();
    let cadenaR = reverse(cminus);

    if(caso === cadenaR){
        result = true;
    }else{
        result = false;
    }
    return result;
}
