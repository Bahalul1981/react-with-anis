
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import myjson from "./jasondata.json"
import Uniceid from "./components/Uniceid"
import Nestingmap from "./components/Nestingmap"

function App() {
  
 
  return (
    <div className="App">
     <Header />
     
     {myjson.map((item,index)=> <Main key={index} name={item.name} age={item.age} email={item.email}  />)}
     <Main mysonname="Odhim Dewan" myname="Dewan Amin Ahmed"/>

     <Uniceid />
     <Nestingmap />
     <Footer />
     
    </div>
  );
}

export default App;
