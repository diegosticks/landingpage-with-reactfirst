import './App.css';
import Footer from './Footer.js';
import Header from './Header';
import Main from './Main';

function App() {
  return (<>
    <div className="App">
      <Header 
        home="Home" 
        about="About" 
        services="Services"
        portfolio="Portfolio"
        team="Team"
        dropDown="Drop Down"
        contact="Contact"
      />
      <Main/>
    </div>
    <Footer/>
  </>);
}

export default App;
