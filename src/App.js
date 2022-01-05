import './App.css';
import useTheme from './useTheme';
import test from './test';

function App() {
  

    const circle = {
      label: 1
    }

    const func = ({ label }) => label + 2

    console.log(
      func(circle)
    )




   

  return (
    <div className="App">
      <h2>test </h2>
      <h2>Hi</h2>

      <h1>qb DAO</h1>
    
    </div>
  ); // test
}

export default App;