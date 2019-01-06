import React     from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
    <div>
        This is from my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        Add Expense page!
    </div>
);

const EditExpensePage = () => (
    <div>
        Edit page
    </div>
);

const HelpPage = () => (
    <div>
        Help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 - <Link to = '/'>Go back to home page!</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to = '/' activeClassName = 'is-active' exact = {true}>Dashboard</NavLink>
        <NavLink to = '/create' activeClassName = 'is-active' exact = {true}>Create Expense</NavLink>
        <NavLink to = '/edit' activeClassName = 'is-active' exact = {true}>Edit Expense</NavLink>
        <NavLink to = '/help' activeClassName = 'is-active' exact = {true}>Help</NavLink>        
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = '/' component = {ExpenseDashBoardPage} exact = {true}/>
                <Route path = '/create' component = {AddExpensePage} exact = {true}/>
                <Route path = '/edit' component = {EditExpensePage} exact = {true}/>
                <Route path = '/help' component = {HelpPage} exact = {true}/>
                <Route component = {NotFoundPage}/>
            </Switch> 
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
