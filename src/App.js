import './App.css';
import {React} from 'react';
import {BrowserRouter as  Router,Route,Routes} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import DashBoard from './Components/DashBoard';

function App() {
  let data = {earnings:"40,000", earnAnnual:"215,000", task:"50", pending:"18"}
  return (
      <>
      <Router>
          <div style={{display:"grid", gridTemplateColumns:"15% 85%" }}>
            <div><Sidebar /></div>
            <div>
              <Routes>
                    <Route path="/dashboard" element={<DashBoard value={data}/>}/>
              </Routes>
            </div>
          </div>
      </Router>
    </>
  );
}

export default App;
