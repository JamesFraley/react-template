import React from "react";
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log("now", now.format("MMM Do, YYYY"));

class ExpenseForm extends React.Component {
   state={
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarfocused: false,
      errorState: ''
   };

   onDescriptionChage = (e)=>{
      const description = e.target.value;
      this.setState(() => ({description}));
   };

   onNoteChage = (e)=>{
      const note = e.target.value;
      this.setState(() => ({note: note}));
   };

   onAmountChange = (e)=> {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,6}(\.\d{0,2})?$/)) {
         console.log("onAmountChange>amount>didChange");
         this.setState(()=>({amount}))
      } else {
         console.log("Did not change.");
      }
   }

   onDateChange = (createdAt)=>{
      createdAt && this.setState(()=>({createdAt}));
   };

   onFocusChange=({focused})=> {
      this.setState(()=>({calendarfocused: focused}));
   };

   onSubmit=((e)=>{
      e.preventDefault();
      console.log("ExpenseForm>onSubmit>!this.state.description", !this.state.description);
      console.log("ExpenseForm>onSubmit>!this.state.amount", !this.state.amount);
      if (!this.state.description || !this.state.amount){
         this.setState(()=>({errorState: "Make sure to add both a description and an amount."}))
      } else {
         this.setState(()=>({errorState: ""}));
         //console.log("ExenseForm>OnSubmit>props", props);
         this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10)* 100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
         });
      };
      console.log("ExpenseForm>onSubmit>this.state.errorState", this.state.errorState);
   })

   render() {
      console.log("ExpenseForm>render>errorState", this.state.errorState);
      return(
         <div>
         {this.state.errorState === true  && <div id="errorDiv">{this.state.errorState}</div> }
         <form onSubmit={this.onSubmit}>
         <input
            type="text"
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChage}
         />
         <input
            type="text"
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
         />
         <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarfocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day)=>false}
         />
         <textarea
            placeholder='Describe the expense (Optional)'
            value={this.state.note}
            onChange={this.onNoteChage}
         >
         </textarea>
         <button>
            Add Expense
         </button>
      </form>
      </div>
      )
   }
};

export default ExpenseForm;
