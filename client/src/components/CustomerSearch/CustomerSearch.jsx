import React, {useState, useEffect} from 'react'
import './CustomerSearch.css'
import axios from 'axios'

const CustomerSearch = () => {

  const [customerList, setCustomerList] = useState([])
/*  const [filteredCustomerList, setFilteredCustomerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')*/

  const fetchCustomers = async () => {
    let {data} = await axios.get('http://localhost:7000/customers')
    console.log(data)
    return (
      console.log('Hello World')
    )
  }
let fetchedCustomers = []
  useEffect(() => {
    fetchedCustomers = fetchCustomers()
  }, []) 

  return (
    <div className="customers">
      <h1>Hello World</h1>
      <ul>
        {fetchedCustomers.map(customer => {
          return (
          <li>
            {customer}
          </li>
          )
        })
        } 
      </ul>
  </div>
  )
}

export default CustomerSearch