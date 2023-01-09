import { Routes, Route} from "react-router-dom";
import "./App.css";
import Buttons from "./Buttons";
import View from "./View";

function App() {
 
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Buttons/>}/>
      <Route path="/view" element={<View/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
