import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React from 'react';



const ExpenseItem = (props) => {
   const clickHandler = () => {console.log('Clicked..!')}
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2></div>
                <div className='expense-item_price'>${props.amount}</div>
            <button onClick={clickHandler}>Change title</button>
</Card>
    )
    
}

export default ExpenseItem;
