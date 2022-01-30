import React from "react"
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router,  Route} from "react-router-dom"
function App() {
  return (
    <Router>
      {/* <Switch> */}
        {/* <Route exact path="/"> */}
      <HomePage/>
      {/* </Route> */}
      {/* </Switch> */}
    </Router>
  );
}

export default App;
