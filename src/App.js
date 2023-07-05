import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import FourthComponent from './components/learning-examples/FourthComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import {FifthComponent} from './components/learning-examples/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      <FourthComponent/>
      <FifthComponent/>
    </div>
  );
}



export default App;
