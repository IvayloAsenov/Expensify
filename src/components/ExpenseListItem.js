import React from 'react';

const ExpenseListItem = ({description, note, amount, createdAt}) => (
    <div>
        <p>{description}</p>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div>
);

export default ExpenseListItem;