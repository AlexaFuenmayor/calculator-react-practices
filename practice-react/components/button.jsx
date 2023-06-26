import React from "react";
import '../src/styleSheets/Button.css'

function Button(props){

	// Definir funcion :

	const isOperator = (value) =>{
		// return isNaN(value) && (value != '.') && (value != '=');
		return (value === '+' || value === '-' || value === '*' || value === '/' )

	};

    // structure:
    return(
			// Esta clase será más elavorada,  contendrá código de javascript para decidir cuál será la clase del boton, ya que en la calculadora necitaremos tener distintos estilos para distintos valores de ese boton:

			// Usamos literal templates, que nos permiten crear una cadena de caracteres, que puede contener cierto código de js para definir el resultado 
			// 1. container-button: será una clase fija, todos los botones tendrán dicha clase
			// 2. ${} dentro de la plantilla iran los botones de operador, la plantilla permitirá crear clases más dinámicas y más complejas.

			// Siguiente paso: determinar si el valor de children es un operador o no: Definir una función: isOperator(), dicha función tomará el valor de props.children, dependiendo de ese valor se le asiganaran las clases, operador o ninguna clase adicional (null)
        <div className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
		// onClick={props.clickManage(props.children)} De esta manera saldría un error, pues el listener de onclick no sería una función, sino que llamaría a una función  que el parametro(valor) es un string. Por lo que una manera correcta de escribir el onClick sería creando una función anónima(que solo se va a usar una vez allí), así le diremos al div que debe llamar a la función. Es decir que cuando ocurra el clic se llamará a una función nueva que no toma ningún parametro y que retornará  el resultado de llamar a la función manejador de clicks: Asi escribimos una función como el valor de onclick
		onClick={() => props.clickManage(props.children)}>
            {/* Los componentes que definimos pueden tener una etiqueta de apertura y una de cierre todo lo que incluimos entre estas dos etiquetas podemos usarlas con la propiedad de props llamada: CHILDREN. todo lo que este dentro de la etiqueta de apertura y de cierre de Button se considera como children y así poder usarlo en nuestro componente*/}
						{/* Se agrega al boton la clase y lo que queramos que el sistema cuando hagamos click sobre el */}

						{/* {Metodo trim: permite remover espacios en una cadena de caracteres o plantilla, trimEnd elimina espacios al final de la cadena} */}
						
						{props.children}
        </div>

    );

}
export default Button