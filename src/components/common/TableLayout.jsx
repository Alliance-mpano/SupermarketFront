import React from 'react';
import './table.css'
function TableLayout({ columns, rowsContent }) {
  // const  = props;
  return (
    <div className="table">
      <table>
      <thead className='header'>
        <tr className='header'>
          {columns.map((column,index) => {
            return <th key={index} style={{borderBottom: "2px solid #407BFF"}}>{column.label}</th>
          })}
          
        </tr>
      </thead>
      <tbody >
        {rowsContent}
      </tbody>
    </table>
    </div>
  );
}

export default TableLayout;
