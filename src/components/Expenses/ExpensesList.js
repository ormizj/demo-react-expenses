import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    // "&&" returns the right-hand value if the condition is truthy
    // "&&" is not needed in this line, only for demonstration purposes 
    // let expensesContent = props.items.length === 0 && <p>No expenses found.</p>;

    if (props.items.length === 0) return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => {
                // React knows how to render arrays, rendering 1 index after another
                return <ExpenseItem
                    // they "key" is not used for prop (though possible), used as an identifier for React
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </ul>
    );
}

export default ExpensesList