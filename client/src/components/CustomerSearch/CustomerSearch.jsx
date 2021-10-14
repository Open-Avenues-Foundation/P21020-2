import React, {useState, useEffect} from 'react'
import './CustomerSearch.css'
import axios from 'axios'

const CustomerSearch = () => {

  const [customerList, setCustomerList] = useState([])
/*  const [filteredCustomerList, setFilteredCustomerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')*/

  const fetchCustomers =  () => {
    axios.get('http://localhost:7000/customers').then((response) => {
    setCustomerList(response.data)
    console.log(response)
    }).catch((err) => {
      console.log(err)
    })
    return (
      console.log('Hello World')
    )
  }

  useEffect(() => {
    fetchCustomers()
  }, []) 

  const renderCustomers = () => {
    if (customerList.length === 0) {
      return 'No customers available'
    } else { 
      return customerList.map(customer => {
        return (
          <li>
            {customer}
          </li>
        )   
      })
    }
  }

  return (
    <div className="customers">
      <h1>Hello World</h1>
      <ul>
        {renderCustomers()}
      </ul>
  </div>
  )
}

export default CustomerSearch