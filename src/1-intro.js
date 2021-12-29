import {createContext, useContext} from 'react';

//para poder utilizar Context tengo que usar createContext que reciba algun dato cualquiera sea
//este valor va a ser el mostrado en caso de no crear un provider
//el valor por defecto se usa cuando el componente NO TIENE UN PROVIDER
const ContextDefault = createContext('valor por defecto')
const Context2 = createContext('valor por defecto 2 ')

// provider va a ser el encargado de pasar el contexto a los componentes hijos
//este provider se saca con la etiqueta <Context.Provider> puedo sacarlo aparte pero asi es mas especifico y puedo tener varias instancias 
// para que context funcione tenemos que pasar un valor el cual se va a pasar a los componentes hijos 
const DefaultProvider = ({children}) =>{
  return(
    <ContextDefault.Provider value={"mi valor "}>
      {children}
    </ContextDefault.Provider>
  )
}
//componente creado para ver cuando se utiliza el valor por defecto  
const Contenido2 = () =>{
  //para poder tener acceso al contexto le paso el componente  como parametro en useContext 
  //en este caso como yo no cree un contextProvider con Context2 no voy a tener un mensaje por ende usa el mensaje por defecto 
  const ctx = useContext(Context2)
  return(
    <div>
      {ctx}
    </div>
  )
}
const Contenido = () =>{
  //para poder tener acceso al contexto le paso el componente  como parametro en useContext 
  const ctx = useContext(ContextDefault)
  return(
    <div>
      {ctx}
    </div>
  )
}



function App() {
  return (
    <DefaultProvider>
      <Contenido/>
      <Contenido2/>
    </DefaultProvider>
  );
}

export default App;
