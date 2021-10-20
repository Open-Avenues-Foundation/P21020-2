// import { on } from 'nodemon';
import React, { useState } from 'react'
import './CreateMessage.css'
import axios from 'axios'
import Toast from 'react-bootstrap/Toast'

const CreateMessage = (props) => {
  const {setMessageAdded} = props
  
  const [isToastOpen, setIsToastOpen] = useState(false)

  const [enteredMessage, setEnteredMessage] = useState('')

  const [enteredNumber, setEnteredNumber] = useState('')



const enterNewMessage = async (event) => {
event.preventDefault()
console.log(enteredMessage)
const data = {message: enteredMessage, customerPhone: enteredNumber }

  try {
    setIsToastOpen(true)
      const response = await axios.post('http://localhost:7000/api/CreateMessage', data)
     setMessageAdded(true)
    console.log(response)
  } catch(error) {
    console.log(error)
  }
}

return (
      <div className="customerinput">
        <h3>Type your message below:</h3>
          <form action="">
              <label htmlFor="to">Recipient:</label>
                  <input type="tel" name="to" id="to" value={enteredNumber} onChange={(event) => setEnteredNumber(event.target.value)} required />
              <label htmlFor="body">Body:</label>
                  <input type="text" name="body" id="body" value={enteredMessage} onChange={(event) => setEnteredMessage(event.target.value)} required />
              <button variant="primary" size="lg" className="sendmessage" onClick={(event) => enterNewMessage(event)}>Send New Text</button>
              <Toast show={isToastOpen} onClose={()=>setIsToastOpen(false)}>
              <Toast.Header>
                  Message Status
                  </Toast.Header>
                  <Toast.Body>Message Sent Successfully</Toast.Body>
              </Toast>
          </form>
      </div>
  )  
}

export default CreateMessage


// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateMessage = () => {
//     const [searchTerm, setSearchTerm] = useState('')
//     const [enteredMessage, setEnteredMessage] = useState('');

  
//     const messageChangeHandler = (event) => {
//     setEnteredMessage(event.target.value);
//      };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     console.log(enteredMessage);
//     setEnteredMessage('');
//   };
//       return (
//         <div className='CreateMessage'>
//             <h3>Type your message below:</h3>
//             <h5>Who do you want to text?</h5>
//             <div className="customers">
//       <Search term={searchTerm} setter={setSearchTerm} />
//       {filteredCustomerList.map(customer => (
//           <Customer name={customer.name}/>
//         ))}
//     </div>
//             <form onSubmit={submitHandler}>
//                 <label>Search for customers by: </label>
//                 <input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
//                 <label>Select All Customers: </label><input type="checkbox" id="SelctAll" name="SelectAll" value="SelectAll" />
//                 <br/>
//                 <label>Type Message Below</label>
//           <input
//             type='text'
//             value={enteredMessage}
//             onChange={messageChangeHandler}
//           />
//                 <br/>
//                 <br/>
//                 <button>Send</button>
//             </form>
//             <br/>
//         </div>
//       )
//     }

//  export default CreateMessage