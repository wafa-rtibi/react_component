import './App.css';

import Adress from './components/Adress';
import FullName from './components/FullName';
import Profilephoto from './components/Profilephoto';


function App() {
  return (
   
    <div className="App">
      <h2>My Profile</h2>
      <Profilephoto/>
      <FullName/>
      <Adress></Adress>
    </div>
   
  );
}

export default App;
