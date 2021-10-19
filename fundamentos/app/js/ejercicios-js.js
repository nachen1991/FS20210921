function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function adivina(a,b){
     a = 0; b = 100;
              
    let numero = random (a,b);
    
    
    for(let val = 1;val <11;val++){
        var num = prompt("Inserta un numero del 1 al 100",0);
        if(num == "" && num != 0){
            alert("Por favor inserta un numero valido");
        }
        if(num != "" && num != 0){
            if(num > numero ){  
              alert("Fallaste!El numero es menor que " + num);
            }
            if(num < numero){
            
                alert("Fallaste!El numero es mayor que " + num);
             }
            if(num == numero){
                alert("Acertaste! el numero correcto es el" + numero);
                break;
            }
        }else{
            alert("Lo siento, el número elegido correcto es el: " + numero)
        }
      
    }
        

}



function genArray(num){
   let array = new Array();

    for(var i = 0;i<=num - 1;i++){
    array[i] = [0];    

    }
    return array[i];
    
}



function esprimo(num){
    
    for(let j = 2; j< num; j++){
        
        if(num % j === 0){
           return false;
            }
    }
    
    return num !== 1;
}

function dameprimos(num, a, b){
    let result = new Array();
    let array = new Array();
   
    for(var i = a;i < b;i++){
        if(esprimo(i)){
            array.push(i);
        }
           
    }
    for(var j = 0; j < num; j++){
        result.push(array[j]);
    }
    
    return result;
   
}
function dameprimos2(num){
    
    let array = new Array();
   
   let nprimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 
        83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 
        179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 
        277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 
        397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]
    
    for(var i = 0;i < num;i++){
       
            array.push(nprimos[i]);       
    
    }
    let result = array;
    
    return result;
   
    
}



function checknif(cad){    
//     let result = false;
    
//    if ( cad.length === 8 && !cad.charAt(cad.length -1).isNaN()){

//         result = true;
//     }
//     return result;
const letterValue = cad.substr(cad.length -1);

}

export function esNIF(nif) {
    if (!/^\d{1,8}[A-Za-z]$/.test(nif))
        return false;
    const letterValue = nif.substr(nif.length - 1);
    const numberValue = nif.substr(0, nif.length - 1);
    return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23);
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


