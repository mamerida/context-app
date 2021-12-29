import { Component, createContext } from "react";
import { useCallback, useContext } from "react/cjs/react.development";

const Context = createContext("mi valor");
const Context2 = createContext("mi valor 2 ");


const Provider = ({children}) =>{
    return(
        <Context.Provider value="otro valor">
            {children}
        </Context.Provider>
    )
}


class Componente extends Component{
    //obtener contexto dentro de una clase forma 1 contextType es obligatorio en caso de no querer vamos al caso 3 
    // static contextType = Context 
    render(){
        console.log(this.context)
        return(
            <div>
                Hola Mundo
            </div>
        )
    }
}

//obtener contexto en un componente de clase 
//mediante una propieadad estatica 
//tambien context type es obligatorio 
// Componente.contextType = Context 


// como accedo a varios contextos dentro de un componente funcional 
const Componente3 = () =>{
    const valor1 = useContext(Context)
    const valor2 = useContext(Context2)
    return(
        <div>{`${valor1} ----- ${valor2}`}</div>
    )
}


const App = () =>{
    return(
        <Provider>
            <Componente/>
            <Componente3/>
            {/* en caso de no querer utilizar los metodos estaticos debo hacerlo mediante consumer de context contextType */}
            <Context.Consumer>
                {valor => <div>{valor}</div>}
            </Context.Consumer>
        </Provider>
    )
}

export default App