import React, {useState, useEffect} from 'react'
import './CustomerSearch.css'


const CustomerSearch = ({customers, setFilteredCustomers}) => {
 const [searchTerm, setSearchTerm] = useState('')
 const [searchAttribute, setSearchAttribute] = useState('id')


 useEffect(()=>{
   
    setFilteredCustomers(customers.filter( customer => {
    return customer[searchAttribute].toLowerCase().includes(searchTerm.toLowerCase())
  }))


 },[searchTerm])

  return (
    <div className="customers">
      <label htmlFor=""></label>
      <select value={searchAttribute} onChange={event => setSearchAttribute(event.target.value)}>
        <option value="id">ID</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="phoneNumber">Phone Number</option>
        <option value="email">Email</option>
        <option value="city">City</option>
        <option value="state">State</option>
        <option value="lastDate">Last Date</option>
        <option value="lastPrice">Last Price</option>
      </select>
      <input type="text" value= {searchTerm} onChange={event=>{
        setSearchTerm(event.target.value)
      }}/>
      
  </div>
  )
}

export default CustomerSearch

// import React, {useState, useEffect} from 'react'
// import './CustomerSearch.css'


// const CustomerSearch = ({customers, setFilteredCustomers}) => {
//  const [searchTerm, setSearchTerm] = useState('')


//  useEffect(()=>{
   
//     setFilteredCustomers(customers.filter( customer => {
//     return customer.firstName.toLowerCase().includes(searchTerm.toLowerCase())
//   }))


//  },[searchTerm])

//   return (
//     <div className="customers">
//       <label htmlFor=""></label>
//       <input type="text" value= {searchTerm} onChange={event=>{
//         setSearchTerm(event.target.value)
//       }}/>
      
//   </div>
//   )
// }

// export default CustomerSearch