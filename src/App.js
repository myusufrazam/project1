import './App.css';
import Button1 from './components/Button1';
import Labelalamat from './components/labelalamat';
import LabelNama from './components/labelnama';

function App() {
  return (
    <div className="App">


    <h1>profile</h1>

     <LabelNama nama="iwan" />
     <Labelalamat alamat="jalan cahyo" />
     <Button1/>

    </div>
  );
}

export default App;
