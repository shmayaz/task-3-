import React from 'react';
import Order from './component/Order';
import CustomerInfo from './component/CustomerInfo';
// import  OrderDetails from './component/OrderDetails';
import './App.css';



class App extends React.Component {

  state={
  customers:[],
  customer:[],
  customerInfo:[],
  order:[],
  v:true
  }

  componentDidMount=()=>{
    fetch('http://localhost:3000')
    .then(res => res.json())
    .then(customers => this.setState({customers}));  
  }

 

  orderi= (a)=>{
    this.setState({order:[]})
    fetch(`http://localhost:3000/customer/${a}`)
    .then(res => res.json())
    .then(customer => this.setState({customer}));
    // .then(this.state.customer.length === 0 ? alert("no orders for this customer"):null);     
  };

  customersInfo= (a)=>{
    fetch(`http://localhost:3000/customerInfo/${a}`)
    .then(res => res.json())
    .then(customerInfo => this.setState({customerInfo}));    
  };


  orderDetail= (a)=>{
    
    fetch(`http://localhost:3000/order/${a}`)
    .then(res => res.json())
    .then(order => this.setState({order}));
 
  };

  order=()=>{
    this.setState({v:true,order:[] })
  }

  info=()=>{
    this.setState({v: false })
  }


  render() {
    
   

    return (
     
    <div className="container">
  
      <div class="box1">

      <button onClick={this.order}>customer orders</button> 
      <button onClick={this.info}>customer Info</button> 

      {this.state.customers.map((customer,index)=>(
       
         <p key={customer.CustomerID} onClick={
         (e)=> {
           
           this.orderi(customer.CustomerID);
          
           this.customersInfo(customer.CustomerID)
          
           }} 
           style={{cursor: 'pointer'}}>
          {customer.ContactName}
          </p>
         
  
      ))}
</div>
      
  { this.state.v === true ?
  <Order  customer={this.state.customer} order={this.state.order}  click={(e)=>{
          return this.orderDetail(e.currentTarget.dataset.or); 
        }}/>

:
<CustomerInfo customerInf={this.state.customerInfo}/>

      }
      </div>
    );
  }
}

export default App;

 