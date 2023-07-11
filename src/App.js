// import background from "./images/bg_1.jpg";
import Register from "./components/Register";
import "./App.css";


function App() {


  return (
    <>
      <div className="d-lg-flex half">
        {/* <img src={background} /> */}
        {/* <div className="bg order-1 order-md-2" id='img-bg' style={{
        backgroundImage: `url(${background})`
        }}></div> */}
        <Register/>
      </div>
      
    </>
  );
}

export default App;
