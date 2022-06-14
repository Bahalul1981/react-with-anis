
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
 
  return (
    <div className="App">
     <Header />

     <Main mysonname="Odhim Dewan" myname="Dewan Amin Ahmed"/>

     <Footer />
     
    </div>
  );
}

export default App;
