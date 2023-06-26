import { useState } from 'react'
import './App.css'
import logo from './img/LOGO.png'
import Button from '../components/button'
import { Input }  from '../components/input'
import ButtonClear from '../components/buttonClear'

function App() {

  const [input, setInput] = useState('Hola')
  // Creando un estado para la aplicacion llamado input, este input (valor ingresado por el usuario) se mantendrá como el estado de este componente. set Input es la función para actualizar el input ya que inicialmente el input será una cadena vacía, por esto no se vera nada en la pantalla

  //1. Asignar el input como valor de la pantalla para que se actulice su valor: en el component input pasarle el prop input con el valor del estado que seríA input


  //Función flecha, tomará un valor (el parametro) funcion que actulizarara el input 
  const aggInput = (value) =>{
setInput(input + value)
  }

  const clearInput = () =>{
    setInput(input = '')
  }


  //EL proximo paso sería crear el click para que el boton haga algo: 1. verificar que el componente button esté listo para usar props(debe tener como parametro prop apra poder extenderlo), 2. pasar un prop de igual nombre a cada boton . 3. Crear el addEventListerner. El cual se agrega directamente en la estructura JSX en el componente button


  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='logo-container'>
        <img src={logo}
        className='logo'
         alt="mi-logo" />
      </div>
      <div className='container-calculator'>

        {/* le pasamos al prop input  el estado que también le coloque por nombre input  */}
        <Input input={input}/>
        <div className="row">
{/* 
          Esta es otra manera de reenderizar un componente, usando etiqueta de apertura y de cierre. Reemplazará lo que está en props.children de el componente button. 
          EL valor de children será: 1*/}

          {/* Le pasamos el prop clickManage, este podrá manejar un click en específico llamando a la funcion aggInput, los botones van a agregar input llamando a dicha función, por eso le damos acceso a esa función pasandola como un prop.. SE ESCRIBE EL NOMBRE DE LA FUNCIÓN sin los parentesis..... con los parentesis se llamaría a la funcion y se le pasaría el resultado de la misma... Pero lo que se quiere es pasar directamente la función para poder llamarla dentor del componente */}
          <Button clickManage={aggInput}>1</Button>
          <Button clickManage={aggInput}>2</Button>
          <Button clickManage={aggInput}>3</Button>
          <Button clickManage={aggInput}>+</Button>
        </div>
        <div className="row">
          <Button clickManage={aggInput}>4</Button>
          <Button clickManage={aggInput}>5</Button>
          <Button clickManage={aggInput}>6</Button>
          <Button clickManage={aggInput}>-</Button>
        </div>
        <div className="row">
          <Button clickManage={aggInput}>7</Button>
          <Button clickManage={aggInput}>8</Button>
          <Button clickManage={aggInput}>9</Button>
          <Button clickManage={aggInput}>*</Button>
        </div>
        <div className="row">
          <Button clickManage={aggInput}>=</Button>
          <Button clickManage={aggInput}>0</Button>
          <Button clickManage={aggInput}>.</Button>
          <Button clickManage={aggInput}>/</Button>
        </div>

        <div className="row">
        <ButtonClear clearManage={() => setInput('')}>
          Clear
        </ButtonClear>
        </div>
      </div>
    </div>
  )
}

export default App
