import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
        {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]; // doesn't change the original state
        
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id != action.expense.id);
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } 
            });
        
        default:
            return state;
    }
};

// Filters Reducer 

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// SORT_BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state, 
                sortBy: action.sortBy
            };
        
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch; 
    }).sort((a, b) => {
        if (sortBy === 'date') 
            return a.createdAt < b.createdAt ? 1 : -1;
        else if (sortBy === 'amount')
            return a.amount < b.amount ? 1 : -1;
    });
};

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});


const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    createdAt: -1000,
    amount: 300
}));

const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    createdAt: 1000,
    amount: 100
}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(400));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'fewfewfewf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    },
};
