import React from 'react'
import axios from 'axios'

const CustomersList = (props)=>{
    
    let { customers } = props
    
    return(
        
        <>
        <div className='CustomersList'>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Last Date</th>
                        <th scope="col">Last Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.length > 0 && customers.map(customer=>(
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.lastName}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.email}</td>
                                <td>{customer.city}</td>
                                <td>{customer.state}</td>
                                <td>{customer.lastOrderDate}</td>
                                <td>{customer.lastOrderPrice}</td>
                            </tr>
                            )
                        )
                    }
                       
                   {
                       customers.length === 0 && 
                    <tr>
                        <td colSpan="12">
                            <div className="centre">
                                <p className="alert alert-danger">
                                    Sorry no cusotmers to display here why don't you upload a 
                                    csv with your customers to begin sending them SMS text messages
                                </p>
                            </div>
                        </td>
                    </tr>
                    }
                </tbody>
            </table>
            </div>

        </>
    )

}

export default CustomersList