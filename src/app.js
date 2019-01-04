import React     from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path = '/' component = {ExpenseDashBoardPage} exact = {true}/>
            <Route path = '/create' component = {AddExpensePage} exact = {true}/>
            <Route path = '/edit' component = {EditExpensePage} exact = {true}/>
            <Route path = '/help' component = {HelpPage} exact = {true}/>
            <Route component = {NotFoundPage}/>
        </Switch> 
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
