import { useEffect, useState } from "react";
import data from './Register.json';
import Formbuilder from "../Formbuilder/Formbuilder";


const Register = () => {
  // const [allValues, setArray] = useState({
  //   fname:"yuvraj",
  //   lname:"ahir",
  //   email:"ahiryuvraj888@gmail.com",
  //   password:"12345678"
  // })
  const [formdata, setFormdata] = useState({

  });
  useEffect(() => {


  }, [])


  // const Myform = () => {

  //   <></>
  //   return (
    
  //   );
  // }

  return (
    <div className="contents order-2 order-md-1">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 py-5">
            <h3>{data.title}</h3>
            <p className="mb-4">{data.subtitle}</p>
            <form>
              <div className="row">
                <Formbuilder  data={data} />
                {/* <div className="row">
                  <div class="form-check col-md-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check  col-md-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Female
                    </label>
                  </div>
                  <div className="col">
                    <select class="form-select col" aria-label="Disabled select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>

                  </div>

                </div> */}


              </div>
              <input type="button" value="Register" className="btn px-5 btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;




