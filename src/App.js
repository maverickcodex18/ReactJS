import logo from './logo.svg';
import './App.css';
import Subsription from './components/subscription/Subscription';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Subsription passedDate={new Date()} subscriptionType={"Monthly Package"} amount={12000} />
          <Subsription passedDate={new Date()} subscriptionType={"Annual Package"} amount={300000} />
      </header>

    </div>
  );
}

export default App;
