import './App.css';
import Labelalamat from './components/labelalamat';
import LabelNama from './components/labelnama';

function App() {
  return (
    <div className="App">


    <h1>profile</h1>

     <LabelNama nama="iwan" />
     <Labelalamat alamat="jalan cahyo" />

    </div>
  );
}

export default App;
