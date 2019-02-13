import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
      });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {description: 'updated'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'updated'
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense({
        description: 'this is description',
        note: 'this is note',
        amount: 500,
        createdAt: 10000
    });

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'this is description',
            note: 'this is note',
            amount: 500,
            createdAt: 10000,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});