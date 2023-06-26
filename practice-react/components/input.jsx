import React from "react";
import '../src/styleSheets/input.css'


// Forma interactiva de definir los componentes funcionales : usando const y definiendo el componente como una función flecha

//Se puede usar parentecis seguido de la flecha cuando se quiere retornar direcatmente la estructura del compomente.. usado para componentes sencillos, sin lógica


//sintaxis de desestructuración en los props
export const Input = ({ input }) => (
    <div className="input">
        {/* el valor que se pasará al componente(el cual vendrá del usuario, se va reemplazar aqui dentro del div.. dentro de las llaves podemos reempalzar código de javascript y trabajar con los props)  */}
        {input}

    </div>

)

// export default Input;