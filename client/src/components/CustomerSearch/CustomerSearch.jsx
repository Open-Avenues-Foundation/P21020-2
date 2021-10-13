import React, {useState, useEffect} from 'react'
import './CustomerSearch.css'
import axios from 'axios'

const CustomerSearch = () => {

  const [customerList, setCustomerList] = useState([])
/*  const [filteredCustomerList, setFilteredCustomerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')*/

  useEffect(() => {
    fetchCustomers()
  }, []) 

  const fetchCustomers = async () => {
    let {data} = await axios.get('/customers')
    setCustomerList(data)
    console.log({data})
  }

  return (
    <div className="customers">
      <h1>Hello World</h1>
      {
      customerList.map(customer => {
        return (<ul>
          <li>{customer.name}</li>
        </ul>
        )
      })
      }
  </div>
  )
}

export default CustomerSearch