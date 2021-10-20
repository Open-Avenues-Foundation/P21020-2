import React, { useState } from "react";
import axios from "axios";

const UploadCSV = () => {
  let [file, setFile] = useState([]);

  const uploadFile = (event) => {
    event.preventDefault(); // prevents stops form from reloading

    let bodyData = new FormData();

    bodyData.append("file", file);

    axios({
      method: "post",
      url: "http://localhost:7000/api/uploadcsv",
      data: bodyData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("Error with Upload"));
  };

  return (
    <div className="UploadCSV">
      <h3>Upload CSV to append to existing customers or add new customers</h3>
      <br />
      <form>
        <input
          type="file"
          id="myFile"
          name="filename"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <button onClick={uploadFile}>Upload</button>
      </form>
      <br />
    </div>
  );
};
export default UploadCSV;
