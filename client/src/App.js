import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import CustomersList from './components/CustomerList'
import CreateMessage from './components/CreateMessage/CreateMessage'
import CustomerSearch from './components/CustomerSearch/CustomerSearch'
import UploadCSV from './components/UploadCSV'


function App() {

  const [customers, setCustomers] = useState([])
  const [filteredCustomers ,setFilteredCustomers] = useState([])

    useEffect(()=>{
        const fetchCustomers = async()=>{
            const { data } = await axios.get('http://localhost:7000/customers')
            
            setCustomers(data)
            setFilteredCustomers(data)
        }
        fetchCustomers()    
    },[])



  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col1">
          <h2>Search Function</h2>
          <CustomerSearch customers = {customers} setFilteredCustomers= {setFilteredCustomers} />
            <br/>
            <h2>Show List of customers</h2>
            <CustomersList customers = { filteredCustomers }/>
            <UploadCSV />
          </div>
          <div className="col col-lg-8 col2">
            <h2>Create Message Here</h2>
          <CreateMessage />
          <br/>
          </div>
          <div className="col col-lg-4 col3">
        </div>
      </div>
      <Footer />
    </div>
  </div>
  );
}

export default App;
