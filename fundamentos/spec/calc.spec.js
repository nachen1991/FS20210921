fdescribe("Pruebas de las funciones de la calculadora", function () {
  describe("Operaciones", function () {
    it("poner digitos", function () {
      let cal = new Calculadora();
      cal.ponerdigito("3");

      expect(cal.screen).toBe("3");

      cal.ponerdigito("5");

      expect(cal.screen).toBe("35");

      cal.operaciones("-");

      expect(cal.screen).toBe("35");

      cal.ponerdigito("5");

      expect(cal.screen).toBe("5");

      cal.operaciones("*");

      expect(cal.screen).toBe("30");
      cal.ponerdigito("2");
      cal.operaciones("=");

      expect(cal.screen).toBe("60");
    });
    
    it("cambio de signo", function(){
        let cal = new Calculadora();
        cal.cambiosigno("5")

        expect(cal.screen).toBe("-5");
    });

    it("retroceso", function(){
        let cal = new Calculadora();
        cal.retroceso("5345")

        expect(cal.screen).toBe("534");
    });

    it("borrado Total", function(){
        let cal = new Calculadora();
        cal.borradoTotal("5345")

        expect(cal.screen).toBe("0");
    });

    
  });
});
