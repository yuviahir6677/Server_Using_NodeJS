// import background from "./images/bg_1.jpg";
import Register from "./components/RegisterForm"; 
import "./App.css";
import Table from "./components/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route index element={<Table />} />
          <Route path="register" element={<Register/>} />
   
          
        </Routes>
      </BrowserRouter>




      {/* <div className="d-lg-flex half"> */}
        {/* <img src={background} /> */}
        {/* <div className="bg order-1 order-md-2" id='img-bg' style={{
        backgroundImage: `url(${background})`
        }}></div> */}
        {/* <Register/> */}
      {/* </div> */}
      {/* <Table /> */}
      
    </>
  );
}

export default App;
