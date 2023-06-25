import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newver from "./Newver";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="new" element={<Newver />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
