import React from 'react'


class CreateMessage extends React.Component {
    render () {
      return (
        <div className='CreateMessage'>
            <h3>Type your message below:</h3>
            <input type="text" className="messageBox" />
            <button>Send</button>
        </div>
      )
    }
  }

 

  export default CreateMessage