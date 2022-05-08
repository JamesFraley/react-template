import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, setTextFilter } from '../actions/filters';

const ExpenseListFilters = (props) => (
      <div>
      <input
         type="text"
         value={props.filters.text}
         onChange={(e)=>{
            props.dispatch(setTextFilter(e.target.value))
         }}
      />
      <select
         value={props.filters.sortBy}
         onChange={(e)=>{
            console.log("e.target.valeu", e.target.value);
            e.target.value === "date" && props.dispatch(sortByDate());
            e.target.value === "amount" && props.dispatch(sortByAmount());
         }}>
         <option value="date">Date</option>
         <option value="amount">Amount</option>
      </select>
   </div>
);

const mapStateToProps = (state) => {
   return {
      filters: state.filters
   };
}

export default connect(mapStateToProps)(ExpenseListFilters);

ExpenseListFilters;