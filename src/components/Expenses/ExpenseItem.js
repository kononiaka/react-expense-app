import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = props => {
    const { amount, date } = props;
    const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem trigerred by React');

    const clickHandler = () => {
        setTitle('Updated title!');
        // console.log(title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Click Me!</button>
        </Card>
    );

};

export default ExpenseItem;