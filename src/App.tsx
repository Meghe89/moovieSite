import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/UI/Navbar/Navbar';
import Home from './Components/Views/Home/Home';
import Footer from './Components/UI/Footer/Footer';
import { ConfigProvider } from './Contexts/Config/Index';
import Moovie from './Components/Views/Moovie/Moovie';

function App() {
  return (
    <ConfigProvider>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/moovie/:id">
          <Moovie />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
        <Footer />
      </Router>
    </ConfigProvider>
  );
}

export default App;
