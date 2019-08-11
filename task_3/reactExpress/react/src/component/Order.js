import React from 'react';


const Order = (props) => {
    return (
        <div className="container2"> 
      

        <div className="box2">
        <table id="customers">
        <tr>
              <th>OrderID</th>
              <th>OrderDate</th>
              <th>ShipCountry</th>
              <th>ShipCity</th>
            </tr>
            {props.customer.map((customer,index)=>(

<tr>
<td key={customer.OrderID} onClick={props.click} data-or={customer.OrderID}><a href="#">{customer.OrderID}</a></td>
<td>{customer.OrderDate}</td>
<td>{customer.ShipCountry}</td>
<td>{customer.ShipCity}</td>
</tr> 


   

      ))}
      
</table>
</div>


<div className="box3">

<table id="customers">
        <tr>
              <th>ProductID</th>
              <th>UnitPrice</th>
              <th>UnitPrice</th>
            
            </tr>
            {props.order.map((order,index)=>(
        
<tr>
         <td>{order.ProductID}</td>
         <td>{order.UnitPrice}</td>
         <td>{order.UnitPrice}</td>
</tr> 
      ))} 

      </table> 
      </div> 
      
        </div>
    );
};

export default Order;