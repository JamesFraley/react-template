import React from 'react';
import { useParams } from "react-router-dom";

const EditExpensePage = () => {
   let params = useParams();
   console.log("EditExpensePage>props", params);
   return (
      <div>
         Editing the expense with id of {params.id}
      </div>
  );
};

export default EditExpensePage;
