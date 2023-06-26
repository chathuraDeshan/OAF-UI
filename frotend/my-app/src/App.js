import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newver from "./Newver";
import Newform from "./Newform";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="new" element={<Newver />}/>
      <Route path="new1" element={<Newform />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
