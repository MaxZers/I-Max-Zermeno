import React from 'react';
import { BrowserRouter } from 'react-router-dom'; /*Estamos importando unicamente BrowserRouter de la libreria. Podemos usar HashRouter cuando nuestra pagina es estatica*/ 
import Routes from './routes'; /*importamos nuestras rutas de la carpeta routes su archivo index.jsx*/

/*import Header from './components/common/header'; Forma de importar un componente uno por uno*/
import { Header, Footer } from './components/common'; /*Forma de importar todos los componentes de un archivo*/

/*Definimos nuestra app como un functional component*/
/*La etiqueta Routes va a mostrar las rutas que tenemos definidas en index.jsx de la carpeta routes*/
const App = () => {
  return(
    <BrowserRouter>
        <Header/>
        <Routes/>
        <Footer/>
    </BrowserRouter>
  )
};

export default App;