import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import { Details } from "./Details";
import "./App.css";
import { Details } from "./Details";

function App() {
  const [data, setData] = useState([]);

  const fakeData = [
    {
      id: uuidv4(),
      title: "John Smith",
      desc: "Some Private information about John Smith",
    },
    {
      id: uuidv4(),
      title: "Ready Freddy",
      desc: "Some Private information about Ready Freddy",
    },
    {
      id: uuidv4(),
      title: "Mr Man",
      desc: "Some Private information about Mr Man",
    },
  ];

  useEffect(() => {
    setData(fakeData);
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          {data.map(({ id, title, desc }) => {
            return (
              <>
                <Details key={id} id={id} title={title} desc={desc} />
              </>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
