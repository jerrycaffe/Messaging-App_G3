import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Landing from './landing';
import SignUp from './SignUp';
import SignIn from './signIn';

const App = ()=>(
    <Switch>
        <Route path = "/signIn" component = {SignIn} />
        <Route path = "/signUp" component = {SignUp}/>
        <Route path = "/" component = {Landing}/>
        <Redirect to="/"/>
    </Switch>
)
export default App;