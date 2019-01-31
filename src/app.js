import React     from 'react';
import ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';

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
    note: 'This is for the water',
    amount: 4500
};

const gasBill = {
    description: 'gas bill', 
    note: 'This is for the gas',
    amount: 100
};

store.dispatch(addExpense(waterBill));
store.dispatch(addExpense(gasBill));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
