// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateMessage = () => {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [enteredMessage, setEnteredMessage] = useState('');

  
//   const messageChangeHandler = (event) => {
//     setEnteredMessage(event.target.value);
//   };

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