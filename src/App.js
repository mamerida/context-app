import {createContext, useContext, useState, memo ,useCallback} from 'react';

const Context = createContext();

const ContadorProvider = ({children}) => {
    const [contador,setCont] =useState(0)

    const incrementar = useCallback(() => setCont( x => x + 1 ) , [])
    const decrementar = useCallback(() => setCont( x => x - 1 ) , [])

    return(
        <Context.Provider value={{contador,incrementar,decrementar}}>
            {children}       
        </Context.Provider>
    )

}

const Incrementar =  memo(() =>{
    console.log('incrementar')
    const { incrementar } = useContext(Context)
    return(
        <button onClick={incrementar}> Incrementar</button>
    )
})

const Decrementar = memo(() =>{
    console.log('decrementar')
    const { decrementar } = useContext(Context)
    return(
        <button onClick={decrementar}> Decrementar</button>
    )
})

const  Label = () =>{
    console.log("Label");
    const {contador} = useContext(Context)
    return(
        <h1>{contador}</h1>
    )
}

const App = () =>{
    return(
        <ContadorProvider>
            <Label/>
            <Incrementar/>
            <Decrementar/>
        </ContadorProvider>
    )
}

export default App


//El problema principal de Context es el rendimiento. Cuando se actualiza el render del componente padre se actualizan los hijos 
// vamos a usar memo para evitar el render innecesario de componentes. Al usar memo no hay cambios, por que no funciona. Trataremos al a funcion de 

// const incrementar = () => setCont(contador + 1 )
// const decrementar = () => setCont(contador - 1 )

// memoizarlas con useCallback
//pero siguen renderizando. AL crear un provider el value que se crea   <Context.Provider value={{contador,incrementar,decrementar}}> se re-renderiza 
//cada vez que haya un cambio en el DOM se hara un re-render

