import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import Header from '../components/Header.js';
import Login from '../components/Login.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = '/' component = {Login} exact = {true}/>
                <Route path = '/dashboard' component = {ExpenseDashBoardPage} exact = {true}/>
                <Route path = '/create' component = {AddExpensePage} exact = {true}/>
                <Route path = '/edit/:id' component = {EditExpensePage} exact = {true}/>
                <Route path = '/help' component = {HelpPage} exact = {true}/>
                <Route component = {NotFoundPage}/>
            </Switch> 
        </div>
    </BrowserRouter>
);

export default AppRouter;