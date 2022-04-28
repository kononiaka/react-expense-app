import './ExpenseDate.css';

function ExpenseDate(props) {
    const { date } = props;
    const month = date.toLocaleString('eu-US', { month: 'long' });
    const day = date.toLocaleString('eu-US', { day: '2-digit' });
    const year = date.getFullYear();
    return (
        <div className='expense-date'>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;