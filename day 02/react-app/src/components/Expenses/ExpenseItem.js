import '..Expenses/ExpenseItem';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React from 'react';



const ExpenseItem = (props) => {
   
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2></div>
                <div className='expense-item_price'>${props.amount}</div>
            
</Card>
    )
    
}

export default ExpenseItem;
