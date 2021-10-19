import React from 'react'
import axios from 'axios'

const uploadFile = () => {
  axios.post('http://localhost:7000/api/uploadcsv').then(response=>{
  console.log(response)   
}).catch( err => {
  console.log(err)
})
}

class UploadCSV extends React.Component {
     

    render () {
      return (
        <div className='UploadCSV'>
            <h3>Upload CSV to append to existing customers or add new customers</h3>
            <br/>
            <form>
                <input type="file" id="myFile" name="filename" />
                <button onClick={uploadFile}>Upload</button>
            </form>
            <br/>
        </div>
      )
    }
  }

 

  export default UploadCSV