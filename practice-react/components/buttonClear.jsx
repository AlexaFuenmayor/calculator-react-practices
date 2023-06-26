import React from "react";
import '../src/styleSheets/clear-button.css'


// COMPONENTE FUNCIONAL 
const ButtonClear = (props) => (
    <div className="clear-button" onClick={props.clearManage}>

        {props.children}
        {/* Una opción valida es usar un valor fijo, ya que no va a cambiar. En vez de usar el Props colocar directamente la palabra a usar. Sino va a cambiar cuando cree distintas instancias del mismo componente puede ser un valor fijo, y escribirlo directamente en el componente  */}
    </div>
)


export default ButtonClear