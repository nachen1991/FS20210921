function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function array(num){
   let array = new Array();
    for(var i = 0;i<=num - 1;i++){
    array[i] = [0];    

    }
    return array[i];
    
}

function primos(num){
    
    for(let j = 2; j< num; j++){
        
        if(num % j === 0){
           return false;
            }
    }
    
    return num !== 1;
}

//function checknif(cad){
//    let result = false;
//    if ( cad.toMatch("^[0-9]{8}[A-Za-z]{1}$")){
//        result = true;
//    }
//    return result;
//}
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
