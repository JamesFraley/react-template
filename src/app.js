import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';

console.log("entering app.js")
const app=document.getElementById('app');
const jsx=(
   <div>
      <h1>Quiz Buddy </h1>
      <h3>Focused Study</h3>
   </div>
);

ReactDOM.render(<h1>hello</h1>, app);
