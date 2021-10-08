# Curso de Viewnext
Curso de Full Stack

# HTML

- Presentación (personal)
    curriculum con foto sin datos personales
- Página principal Sakila (videoclub)
    https://dev.mysql.com/doc/sakila/en/
- Formulario de customer (https://dev.mysql.com/doc/sakila/en/sakila-structure-tables-customer.html)
    Structure -> table -> customer
    
# CSS
Elementos

* Estilos diferenciados
* Diseño adaptable (mobile first)
* Flex en principal y grid en formulario
* Consultas de medios, Imagenes 
* BEM
* Fuente propia
* Impresora
* Animaciones y transformaciones

Enlaces

* [Fotos](https://picsum.photos/)
* [Iconos](https://fontawesome.com/)
* [Textos](https://lipsum.com/)

# JavaScript

Ejercicios

* Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
* Adivina el Número, generar un número entre el 0 y el 100, introducir un número e informar si es igual, mayor o menor. Hay un máximo de 10 intentos para encontrar el número que sea igual.
* Crear una función que devuelva un array con el numero de elementos indicado, inicializados al valor suministrado.
* Crear una función que devuelva un determinado número de números primos.
* Crear una función que valide un NIF
* Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

### Objetos

1. Crear la fncion constructora del juego Adivina el número.
2. Crear la clase del juego Adivina el Número.


####DOM

1. Calculadora.
2. Validad formulario de clientes.

## Angular

1. Reproducir la calculadora
2. Reproducir el formulario de Clientes en el componente ClienteFormulario
3. Crear módulo CommonComponent (export, import)

    a. Crear componente FormButtons con los botones de Enviar y Volver (@output: send, cancel - @input: send-disabled)

    b. Crear componente ShowErrorsMessages que muestre los errores de validación (@input: errors)
4. Convertir ShowErrorsMessages en una directiva
5. Crear directivas de validación:

    - IBAN, 
    - greater-than, 
    - before, after, future, futureOrPresent, past, ...