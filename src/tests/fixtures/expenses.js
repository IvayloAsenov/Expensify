import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: 'note',
    amount: 185,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: 'note',
    amount: 10950,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: 'something',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];
