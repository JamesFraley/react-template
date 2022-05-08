import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
   console.log("Info>props", props);
   return (
   <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
   </div>
)};

const withAdminWarning = (WrappedComponent) => {
   return (props)=>(
      <div>
         { props.isAdmin && <p>This is private info.  Do not share!</p>}
         <WrappedComponent {...props} />
      </div>
   );
};

const requireAuthentication = (WrappedComponent) => {
   return (props)=>(
      <div>
      { props.isAuthenticated && <WrappedComponent {...props} />}
      { props.isAuthenticated || <p>Please log in.</p>}
      </div>
   );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={false} info="details go here" />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} isAdmin={false} info="details go here" />, document.getElementById("app"));

setInterval(()=>{
   ReactDOM.render(<AuthInfo isAuthenticated={false} isAdmin={false} info="details go here" />, document.getElementById("app"));
}, 10000);