import "./App.css";
import InterwiewAccord from "./components/InterwiewAccord";
import data from './helper/data';


function App() {
  return (
    <>
      <div className="header">
        <h2>REACT Interview Ouestions And Answers</h2>
      </div>
      <div className="app">
        <div className="main">
          <InterwiewAccord data={data}/>
        </div>
      </div>
    </>
  );
}

export default App;
