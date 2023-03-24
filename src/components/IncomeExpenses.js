import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="IncomeExpenses">
            <div className="IncomeExpensesChild">
                <h4>Income</h4>
                <p>+ 0.00€</p>    
            </div>
            <div className="IncomeExpensesChild">
                <h4>Expense</h4>
                <p>- 0.00€</p>
            </div>
        </div>
    )
}

export default IncomeExpenses