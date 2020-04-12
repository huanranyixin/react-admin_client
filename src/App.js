import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;