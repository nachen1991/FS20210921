/*describe('Demos de las pruebas', function(){
    describe('Calculos', function(){
        it('suma 2 + 2', function(){
            let a = 2; b = 2;
            let result;

            result = suma(a,b)

            expect(result).toBe(4)
        })

        it('suma negativo', function(){
            let a = 2; b = -2;
            let result;

            result = suma(a,b)

            expect(result).toBe(0)
         //   if(a != 2 || b != 2 || result == 0){
         //       fail('No pasa ...')
         //   }
            
        })

        it('esto queda pendiente')

        describe('sumas', function(){
            [[2,2,4], [-1,2,1], [2,-1,1], [0,0,0]].forEach(caso =>{
                it(`Suma ${caso[0]} mas ${caso[1]} debe ser ${caso[2]}`, function(){
                    expect(suma(caso[0], caso[1])).toBe(caso[2])
                })

            });

        //    [['a','b']].forEach(caso =>{
        //        it(`Suma erronea ${caso[0]} mas ${caso[1]}`, function(){
        //            expect(suma(caso[0], caso[1])).toThrow()
        //        })

        //    });
            

        })

        describe('divisiones', function(){
            [[4,2,2], [4,0,2], ['a', 'b', 'NaN']].forEach(caso =>{
                it(`Division ${caso[0]} dividido ${caso[1]} debe ser ${caso[2]}`, function(){
                    expect(divide(caso[0], caso[1])).toBe(caso[2])
                })
    
            });
    
        })
    })

    

    it('Este pasa siempre', function(){
        expect(true).toBeTruthy()
    })

    xit('Este falla siempre', function(){
        expect(true).not.toBeTruthy()
    })
})

var soyGlobal='algo'
var count = 0;

fdescribe('Sintaxis', function(){
    xdescribe('Operadores', function(){
        it('Operadores', function(){
            function kk() {
                var i = 1;
                if(true) {
                    var j = 2;
                }
                c = i + j;
                return c;
            }

            expect(kk() === c).toBeTrue()

            a = 1
            b = 2
            expect(a = b).toBeTruthy()
            expect(a = b).not.toBeTrue()
            a = '2'
            b = '2'

            expect(a + b == 22).toBeTruthy()
            //expect(a + b).toEqual(22)

            b = 2
            expect(a + b).toEqual(22)
            expect(a * b).toEqual(4)
            //expect(a + b == 22).toBeTruthy()

        })
    })

    xdescribe('colecciones', function(){
        it('Multiples', function(){
            let t = [10, 20, 30];
            let o = { x : 10, y : 20};
            o.x = 20

            expect(t.length).toEqual(8)
            expect(t[4]).toEqual(8)
        })

    })

})

*/