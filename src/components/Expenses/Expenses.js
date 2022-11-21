import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };


    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;