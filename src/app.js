import React     from 'react';
import ReactDOM  from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const waterBill = {
    description: 'water bill', 
    note: 'This is for the water'
};

const gasBill = {
    description: 'gas bill', 
    note: 'This is for the gas'
};

store.dispatch(addExpense(waterBill));
store.dispatch(addExpense(gasBill));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
