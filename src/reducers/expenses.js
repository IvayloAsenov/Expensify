const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
