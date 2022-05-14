//Card component is a composition pattern for React

import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = props => {
    const { items } = props;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        console.log('Expenses.js ', selectedYear);
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {items.map((item, i) => {
                    return <ExpenseItem key={i} title={item.title} amount={item.amount} date={item.date} />;
                })}


                {/* 
                <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
                <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
                <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
                <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} /> */}
            </Card>;
        </div>
    );
};

export default Expenses;