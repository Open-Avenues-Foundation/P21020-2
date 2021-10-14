import React from 'react'


const UploadCSV =()=> {
  
      return (
        <div className='UploadCSV'>
            <h3>Upload CSV to append to existing customers or add new customers</h3>
            <br/>
            <form action="">
                <input type="file" id="myFile" name="filename" />
                <button>Upload</button>
            </form>
            <br/>
        </div>
      )
    }

  export default UploadCSV