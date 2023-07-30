import React  from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    <form>
    <div className="new-expense_controls">
        <div className="new-expense_control">
            <label>Title</label>
            <input type="text" ></input>
        </div>
        <div className="new-expense_control">
            <label>Amount</label>
            <input type="number" min= "1.00" step = "1.00"> </input>
        </div>
        <div className="new-expense_control">
            <label>Date</label>
            <input type="date" min= "2015-01-01" max ="2023-12-12"></input>
        </div>
        <div className="new-expense_control">
            <button type="submit">Add Expense</button>
        </div>
    </div>
    </form>
}

export default ExpenseForm;