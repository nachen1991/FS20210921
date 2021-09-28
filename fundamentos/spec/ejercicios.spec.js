describe('Pruebas', function(){

    describe('random', function(){

        it('Numero alteatorio', function(){

            let a = 1; b = 50;
            let result;
    
            result = random(a,b)

            window.alert("El numero random es:" + result)
    
        })

        it('adivina el numero', function(){
            let a = 0; b = 100;
              

            let numero = random (a,b);
            
            
            for(let val = 1;val <11;val++){
                var num = prompt("Inserta un numero del 1 al 100",0);
                if(num > numero ){  
                    window.alert("Fallaste!El numero es menor que " + num);
                }
                if(num < numero){
                    
                    window.alert("Fallaste!El numero es mayor que " + num);
                }
                if(num == numero){
                    window.alert("Acertaste! el numero correcto es el" + numero);
                
                }
            }
            window.alert("Lo siento, el número elegido correcto es el: " + numero)

        }) 
    })

    describe('primos', function(){

        it('numeros primos', function(){
    
            let result;
            let array = new Array();
           
           let nprimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 
                83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 
                179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 
                277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 
                397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499]
           var num = prompt("¿Cuantos numeros primos quieres?",0);
            for(var i = 0;i < num;i++){
                   array.push(nprimos[i]);
            
            }
            window.alert("Los " + num + " numeros primos son: " + array);
            
        
        })


    })

    
    

       


    
})