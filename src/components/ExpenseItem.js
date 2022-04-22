import "./ExpenseItem.css";

function ExpenseItem(props) {
    const { title, amount, date } = props;
    const month = date.toLocaleString('eu-US', { month: 'long' });
    const day = date.toLocaleString('eu-US', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    );

}

export default ExpenseItem;