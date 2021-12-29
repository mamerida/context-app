import {createContext,useContext,useState} from 'react'


const Context = createContext({valor:false, toggle: () =>{ console.log("test ")}})

const Provider = ({children}) =>{
    const[valor,setValor] = useState(false)
    const value = {
        valor, 
        toggle: ()=> setValor(!valor)
    }
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const Componente = () =>{
    //para poder acceder al contexto tengo que acceder a useContext con el objeto que le va a dar el contecto de las propiedades 
    const { valor , toggle} = useContext(Context)
    return(
        <div>
            <label>{valor.toString()}</label>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}
const Componente2 = () =>{
    //para poder acceder al contexto tengo que acceder a useContext con el objeto que le va a dar el contecto de las propiedades 
    const { valor , toggle} = useContext(Context)
    return(
        <div>
            <label>{valor.toString()}</label>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

const App  = () =>{
    return(
        <div>
        <Provider>
            <Componente/>
        </Provider>
        <Componente2/>
        </div>
    )
}

export default App