import React, {useState, useEffect} from 'react'
import './CustomerSearch.css'


const CustomerSearch = ({customers, setFilteredCustomers}) => {
 const [searchTerm, setSearchTerm] = useState('')


 useEffect(()=>{
   
    setFilteredCustomers(customers.filter( customer => {
    return customer.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  }))


 },[searchTerm])

  return (
    <div className="customers">
      <label htmlFor=""></label>
      <input type="text" value= {searchTerm} onChange={event=>{
        setSearchTerm(event.target.value)
      }}/>
      
  </div>
  )
}

export default CustomerSearch