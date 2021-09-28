import '../App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'


const BodyContent = () => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:7000/customers')
            .then(requestData => {
                console.log(requestData)
                const customerList = requestData.data
                setCustomers(customerList)
                
                return customerList
            }).catch(error => {
                console.log(error + " : Or Customers Not Found")
            })
    }, [])
  return (
    <div className = "bodyContent">
        <form>
            <h3>Step 1</h3>
            <p>Upload your customers CSV file here to start sending SMS Marketing...</p>
            <input type ='file'></input>
            <button>Upload your CSV file here</button>
        </form>

        <br></br>
        <div className="CustomersDisplay">
            <center>
                <h3>Step 2</h3>
                <p>Customers uploaded listed here</p>
                <p>select from the list the customers you'd like to send SMS message to</p>
                <ul>
                    { customers.map(customer => {
                            return <li>{customer.firstName} {customer.email}</li>
                    }) }
                </ul>
            </center>
        </div>

        <br></br>
        <div className="CustomersDisplay">
            <center>
                <h3>Step 3</h3>
                <p>Type your message </p>
                <p>select from the list the customers you'd like to send SMS message to</p>
                <button>Send</button>
            </center>
        </div>
     </div>
  );
}

export default BodyContent;
