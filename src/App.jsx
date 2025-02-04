import Herosection from "./Componenets/Herosection";
import Navbar from "./Componenets/Navbar";


function App() {


  return (
    <div className="bg-[radial-gradient(circle,#25325a,#232e51,#222a48,#202740,#1e2337,#1b2035,#181d32,#151a30,#101733,#091335,#040e37,#000839)] w-full h-screen">
      <Navbar />
      <Herosection />
    </div>
      
    
  );
}

export default App;
