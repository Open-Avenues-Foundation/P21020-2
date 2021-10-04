import React from 'react'


class CreateMessage extends React.Component {
    render () {
      return (
        <div className='CreateMessage'>
            <h3>Type your message below:</h3>
            <h5>Who are you sending the message too</h5>
            <form>
                <label>Search for customers by: </label>
                <input className="SearchBox" placeholder="Id, Name, or Email" />
                <label>Select All Customers: </label><input type="checkbox" id="SelctAll" name="SelectAll" value="SelectAll" />
                <br/>
                <input type="text" className="messageBox" />
                <br/>
                <br/>
                <button>Send</button>
            </form>
            <br/>
            
        </div>
      )
    }
  }

 

  export default CreateMessage