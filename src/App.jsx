import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";


function App() {
    return (
      <Router>
          <Route exact path="pages/" component={Home} />
      </Router>
    );

}

export default App;
