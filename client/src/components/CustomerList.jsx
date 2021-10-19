import React from 'react'
import axios from 'axios'



const CustomersList = ()=>{


    return(
        <>
        <div className='CustomersList'>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
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
                </tbody>
            </table>
            </div>

        </>
    )

}

export default CustomersList