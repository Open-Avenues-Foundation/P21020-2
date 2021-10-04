// import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import CustomersList from './components/CustomerList'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col1">
            <h2>Show List of customers</h2>
            <h5>Or show msg asking for CSV to upload list of customers</h5>
            <CustomersList />
          </div>
          <div className="col col2">
            <h2>Create Message Here</h2>
            <p>
              We should have should be able to create the msg actually
              typing it out , select to whome we will be sending
              when we type msg we have to be mindful of how many characters sms msg can have ?
            </p>
          </div>
          <div className="col col3">
            <h2>Display Message Sent Status here</h2>
            <p> in this section we will display either green KO messages sent or Red there is a failure</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
