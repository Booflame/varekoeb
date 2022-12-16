import { useState } from 'react';
import './App.css';

function App() {

  const [vare1, setVare1] = useState("");
  const [vare2, setVare2] = useState("");
  const [varer, setVarer] = useState([]);

 
  async function handleInput(vare, antal) {
    let updatedList = [...varer];   
    setVarer(updatedList.concat(`{"${vare}":"${antal}"}`));
    }  

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      vareliste: JSON.stringify(varer)
    }
    console.log(formData);

    document.getElementById("output").innerHTML = JSON.parse(formData.vareliste);
  }

  return (
      <form onSubmit={handleSubmit}>
      <label>Vare 1&nbsp;<input name="vare1" type="number" value={vare1} onChange={e => { setVare1(e.target.value); handleInput(e.target.name, e.target.value); }}></input></label><br></br>
      <label>Vare 2&nbsp;<input name="vare2" type="number" value={vare2} onChange={e => { setVare2(e.target.value); handleInput(e.target.name, e.target.value); }}></input></label><br></br>
      <button>Send</button>
      <div id="output"></div>
    </form>
    
  );
}

export default App;
