import { useState } from 'react';
import './App.css';

function App() {

  const [vare1, setVare1] = useState("");
  const [vare2, setVare2] = useState("");
  const [varer, setVarer] = useState([]);

  async function handleInput(vare, antal) {
    let updatedList = [...varer]; 
    let total = 0;

    for (const vare of updatedList) {
      total = total + parseInt(vare.antal);
    }

    if (total + parseInt(antal) < 11) {

    const index = updatedList.findIndex(vareX => vareX.varenavn === vare);  
    
    if (index === -1) {
      setVarer(updatedList.concat({varenavn: `${vare}`, antal:`${antal}`}));
    } else {
      updatedList[index].antal = antal;
      setVarer(updatedList);
    } 

    } else {
      alert("Antal varer højere end 10")
    }

    }  

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      vareliste: JSON.stringify(varer)
    }
    console.log(formData)
  } 

  return (
      <form onClick={handleSubmit}> 
      <label>Vare 1&nbsp;<input name="vare1" type="number" value={vare1} onChange={e => { setVare1(e.target.value); handleInput(e.target.name, e.target.value); }}></input></label><br></br>
      <label>Vare 2&nbsp;<input name="vare2" type="number" value={vare2} onChange={e => { setVare2(e.target.value); handleInput(e.target.name, e.target.value); }}></input></label><br></br>
      <button>Send</button>
      {varer.map(vare => {
        return (
          <div key={vare.varenavn}>
            <h2>name: {vare.varenavn}</h2>
            <h2>antal: {vare.antal}</h2>
            <hr />
          </div>
        );
      })}
    </form>
    
  );
}

export default App;
