import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;