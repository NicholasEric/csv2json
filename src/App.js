import {useState} from 'react';

function App() {
  const [json, setJson] = useState("");
  const jsonArr = [];

  const handleClick = () => {
    let csvArr = document.getElementById("csv").value.trim().split("\n");
    let [csvKeys, ...csvProps] = csvArr.map(arr => arr.split(";"));
    
    for (let prop of csvProps) {
      let obj = {}
      for (let key in csvKeys) {
        obj[csvKeys[key]] = prop[key];
      }
      jsonArr.push(obj);
    }
    setJson(JSON.stringify(jsonArr));
    jsonArr.length = 0;
  }
  
  return (
    <div className="App">
      <h4>CSV: </h4>
      <textarea id="csv" rows="4" cols="50"></textarea>
      <br />
      <button onClick={handleClick}>change to JSON</button>
      <p>JSON: {json}</p>
    </div>
  );
}

export default App;
