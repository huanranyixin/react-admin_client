import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils';
class Login extends Component {
    render() {
        const user = memoryUtils.user;
        if (!user || !user.username) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                hello {user.username}
            </div>
        );
    }
}

export default Login;