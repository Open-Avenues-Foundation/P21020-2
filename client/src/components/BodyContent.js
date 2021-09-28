import '../App.css';

const BodyContent = () => {
  return (
    <div className = "bodyContent">
        <form>
            <h3>Step 1</h3>
            <p>Upload your customers CSV file here to start sending SMS Marketing...</p>
            <input type ='file'></input>
            <button>Upload your CSV file here</button>
        </form>

        <br></br>
        <div className="CustomersDisplay">
            <center>
                <h3>Step 2</h3>
                <p>Customers uploaded listed here</p>
                <p>select from the list the customers you'd like to send SMS message to</p>
                <ul>
                    <li>customer A</li>
                    <li>customer B</li>
                    <li>customer C</li>
                    <li>customer D</li>
                    <li>customer E</li>
                    <li>customer F</li>
                    <li>customer G</li>
                </ul>
            </center>
        </div>

        <br></br>
        <div className="CustomersDisplay">
            <center>
                <h3>Step 3</h3>
                <p>Type your message </p>
                <p>select from the list the customers you'd like to send SMS message to</p>
                <button>Send</button>
            </center>
        </div>
     </div>
  );
}

export default BodyContent;
