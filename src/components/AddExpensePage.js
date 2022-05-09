import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';



const AddExpensePage = (props) => {
   const navigate = useNavigate();
   return (
   <div>
      <h1>Add Expense</h1>
      <ExpenseForm
         onSubmit={(expense)=>{
            console.log("AddExpensePage>AddExpensePage>ExpenseForm>expense", expense);
            props.dispatch(addExpense(expense));
            console.log("AddExpensePage>AddExpensePage>ExpenseForm>props", props);
            navigate('/');
         }}
      />
   </div>
)};

export default connect()(AddExpensePage);
