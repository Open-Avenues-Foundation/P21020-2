import React from 'react'

class CustomersList extends React.Component {
    render () {
      return (
        <div className='CustomersList'>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Last Date</th>
                        <th scope="col">Last Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mohamed</td>
                        <td>Hafez</td>
                        <td>7047777454</td>
                        <td>mhafez1978@outlook.com</td>
                        <td>Lowell</td>
                        <td>Massachussetts</td>
                        <td>10-03-2021</td>
                        <td>$29.99</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>first2</td>
                        <td>last2</td>
                        <td>4017653980</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>first3</td>
                        <td>last3</td>
                        <td>9807654321</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="12">
                            <div className="centre">
                                <p className="alert alert-danger">
                                    Sorry no cusotmers to display here why don't you upload a 
                                    csv with your customers to begin sending them SMS text messages
                                </p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
      )
    }
  }

  

  export default CustomersList