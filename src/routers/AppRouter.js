import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Login from '../components/Login.js';
import PrivateRoute from './PrivateRoute.js';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path = '/' component = {Login} exact = {true}/>
                <PrivateRoute path = '/dashboard' component = {ExpenseDashBoardPage} exact = {true}/>
                <PrivateRoute path = '/create' component = {AddExpensePage} exact = {true}/>
                <PrivateRoute path = '/edit/:id' component = {EditExpensePage} exact = {true}/>
                <Route path = '/help' component = {HelpPage} exact = {true}/>
                <Route component = {NotFoundPage}/>
            </Switch> 
        </div>
    </Router>
);

export default AppRouter;