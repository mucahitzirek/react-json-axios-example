import { BrowserRouter as Router, Route } from "react-router-dom";
import UserComponent from "./components/UserComponent";
import UserDetail from "./components/UserDetail";

const App = () => {
  return (
    <Router>
      <div className="container text-center">
        <Route path="/" exact component={UserComponent} />
        <Route path="/posts/:id" component={UserDetail} />
      </div>
    </Router>
  );

};

export default App;
