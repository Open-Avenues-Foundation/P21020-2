import React from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import CustomersList from './components/CustomerList'
import CreateMessage from './components/CreateMessage/CreateMessage'
import CustomerSearch from './components/CustomerSearch/CustomerSearch'
import UploadCSV from './components/UploadCSV';
import Filter from './components/FilterCustomers/FilterCustomers'


function App() {
  return (
  <>
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col1">
            <br/>
            <h2>Show List of customers</h2>
            <CustomersList />
            <UploadCSV />
          </div>
          <div className="col col-lg-8 col2">
            <h2>Search Function</h2>
            <p>
              I split this into another component
            </p>
            <CustomerSearch/>
            <br/>
            <p>
            <Filter/>
            </p>
            <br/>
          </div>
          <div className="col col-lg-8 col2">
            <h2>Create Message Here</h2>
            <p>
              We should have should be able to create the msg actually
              typing it out , select to whome we will be sending
              when we type msg we have to be mindful of how many characters sms msg can have ?
            </p>
          <CreateMessage />
            <br/>
          </div>
          <div className="col col-lg-4 col3">
            <h2>Display Message Sent Status here</h2>
            <p> in this section we will display either green KO messages sent or Red there is a failure</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
  );
}

export default App;
