import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../components/homepage';

const Routes = () => (
    /**NOTA: aqui colocamos la palabra exact para que la coincidencia sea exacta y evitar redireccionamientos erroneos */
    <Switch>
        <Route exact path='/galeria' render={() => <p>Genuino, Cleo, Gran Maestro, Aldiva y todo el crew estaran por aqui</p>} />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/sobremi' render={() => <p>Guiado a mi descripcion</p>} />
        <Route exact path='/contacto' render={() => <p>Guiado a la pagina de contacto</p>} />
        {/*<Route render={() => <p>Pagina no encontrada</p>}/> Manera de mostrar una pagina especifica de pagina no encontrada*/}
        <Redirect to="/" /> {/* Forma de redirigir a pagina principal usando Redirect */}
    </Switch>
)

export default Routes;