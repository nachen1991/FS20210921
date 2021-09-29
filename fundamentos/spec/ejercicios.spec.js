describe('Pruebas', function(){

    describe('random', function(){

        it('Numero alteatorio', function(){

            let a = 1; b = 50;
            let result;
    
            result = random(a,b)

            let expresion = /\d+/g;

            expect(result).toMatch(expresion)
 
    
        })

        xit('adivina el numero', function(){
            let a = 0; b = 100;
            
            let result = adivina(a,b);

            expect(result).toThrow()
            
        }) 
    })

    describe('generar array', function(){

        it('Generador de array',function(){
            let num = 2;
            let result = genArray (num);
            return result;

        })
    })

    describe('primos', function(){

        it('numeros primos', function(){
    
            let a = 2;
            let b = 50;
            let num = 4;
            let result = dameprimos(num,a,b);

            expect(result).toEqual([2,3,5,7]);
           
        })

        it('numeros primos2', function(){
    
            let num = 4;
            let result = dameprimos2(num);
           
           //var num = prompt("¿Cuantos numeros primos quieres?",0);
            expect(result).toEqual([2,3,5,7]);
            
        
        })

        it('es primo', function(){
            let num = 7

            expect(esprimo(num)).toBeTrue()
        })


    })

    describe('nif', function(){

        it('Verificar nif', function(){
            let cadena = "12345678Y"

            expect(cadena).toMatch(/^[0-9]{8}[A-Za-z]{1}$/)
        })

        

    })

    describe('Palindromo', function(){
        ['ana', 'Sometamos o matemos', 'Isaac no ronca asi', 'Ali tomo tila'].forEach(caso =>{

            it(`Palindromo valido: ${caso}`, () => {
                let result = validaPalindromo(caso);
                expect(result).toBeTrue()
            });
    
            it('palindromo invalido', () => {
                let result = validaPalindromo(caso);
                expect(result).toBeFalse()
            });
        })
       

    })
    
    

       


    
})