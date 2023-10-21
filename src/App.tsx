import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './Components/UI/Navbar/Navbar';
import Home from './Components/Views/Home/Home';
import Footer from './Components/UI/Footer/Footer';
import { ConfigProvider } from './Contexts/Config/Index';

function App() {
  return (
    <ConfigProvider>
    <Router>
      <Navbar />
      <Switch>
        <Home />
      </Switch>
      <Footer />
    </Router>
    </ConfigProvider>
  );
}

export default App;
