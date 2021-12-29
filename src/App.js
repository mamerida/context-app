import { Component, createContext } from "react";

const Context = createContext("mi valor");

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

const App = () =>{
    return(
        <Provider>
            <Componente/>
            {/* en caso de no querer utilizar los metodos estaticos debo hacerlo mediante consumer de context contextType */}
            <Context.Consumer>
                {valor => <div>{valor}</div>}
            </Context.Consumer>
        </Provider>
    )
}

export default App