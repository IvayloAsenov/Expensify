import moment from 'moment';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';

test('should setup to set up text filter object', () => {
    const textFilter = "something";
    const action = setTextFilter(textFilter);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: textFilter
    });
});

test('should setup to sort by date object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('should setup to sort by amount object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('should setup set start date object', () => {
    const date = moment(0);
    const action = setStartDate(date);

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: date
    });
});

test('should setup set end date object', () => {
    const date = moment(0);
    const action = setEndDate(date);

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: date
    });
});


