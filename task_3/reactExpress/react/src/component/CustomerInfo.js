import React from 'react';

const CustomerInfo = (props) => {
    return (
        <div className="container2">
              <div className="box2">
        <table id="customers">
        <tr>
              <th>ContactName</th>
              <th>CompanyName </th>
              <th>Phone</th> 
        </tr>
            {props.customerInf.map((inf,index)=>(
        <tr>
             <td>{inf.ContactName }</td>
             <td>{inf.CompanyName } </td>
             <td>{inf.Phone } </td>

        </tr> 

         ))} 
        </table>
           
        
        </div>
        </div>
    );
};

export default CustomerInfo;