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

const gasBill = {
    description: 'gas bill', 
    note: 'This is for the gas',
    amount: 100,
    createdAt: 5000
};

const waterBill = {
    description: 'water bill', 
    note: 'This is for the water',
    amount: 4500, 
    createdAt: 100
};

const rent = {
    description: 'rent', 
    note: 'This is for the water',
    amount: 15500, 
    createdAt: 500
};

store.dispatch(addExpense(waterBill));
store.dispatch(addExpense(gasBill));
store.dispatch(addExpense(rent));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
