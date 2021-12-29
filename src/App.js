import {createContext, useContext, useState} from 'react';

const Context = createContext();

const ContadorProvider = ({children}) => {
    const [contador,setCont] =useState(0)

    const incrementar = () => setCont(contador + 1 )
    const decrementar = () => setCont(contador - 1 )

    return(
        <Context.Provider value={{contador,incrementar,decrementar}}>
            {children}       
        </Context.Provider>
    )

}

const Incrementar = () =>{
    console.log('incrementar')
    const { incrementar } = useContext(Context)
    return(
        <button onClick={incrementar}> Incrementar</button>
    )
}

const Decrementar = () =>{
    console.log('decrementar')
    const { decrementar } = useContext(Context)
    return(
        <button onClick={decrementar}> Decrementar</button>
    )
}
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

