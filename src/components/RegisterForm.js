import { useEffect , useState } from "react";
import background from "../images/bg_1.jpg";
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useLocation,useNavigate } from "react-router-dom";

const Register = (props) => {

  const navigate = useNavigate();
  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      id:'',
      fname:'',
      lname: '',
      email: '',
      mob: '+91-',
      website: '',
      pass: '',
      cpass: '',
    },
    validationSchema: Yup.object({
      fname: Yup.string().label('First Name').required("First Name required*"),
      lname: Yup.string().label('Last Name').required("Last Name required*"),
      email: Yup.string().label('Email').email().required("Email required*"),
      mob: Yup.string().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Phone number is not valid').required("Phone Number required*"),     
      website:Yup.string().label("website").required("Website required*"),
      pass:Yup.string().min(8, "Must Contain 8 Characters").required("Password required*")
      .matches(
        /^(?=.*[a-z])/,
        " Must Contain One Lowercase Character"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "  Must Contain One Uppercase Character"
      )
      .matches(
        /^(?=.*[0-9])/,
        "  Must Contain One Number Character"
      )
      .matches(
        /^(?=.*[!@#/$%^/&/*])/,
        "  Must Contain  One Special Case Character"
      ),
      cpass:Yup.string()
      .oneOf([Yup.ref('pass'), null], 'Passwords must match')
    }),
    onSubmit: function (values) {
      const options = {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      };

      fetch('http://localhost:8000/registration', options)
        .then(response => response.json())
        .then((response) => {
          console.log(response)
          alert(response.message)

          if(response.status==1){
            navigate("/")
          }

        })
        .catch((err) => {
          alert("Server Down")
          console.error(err)

        });
    }
  })
  

  const location = useLocation();
  useEffect(() => {
    if(location.state){
      getdata(location.state.id);
    }
  }, []);
  
  const getdata=(id)=>{
    console.log(JSON.stringify({id:id})); 
     const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      //  body:JSON.stringify({values})
      };
      fetch(`http://localhost:8000/registration?id=${id}`, options)
        .then(response => response.json())
        .then((response) => {

          // console.log(response);
          formik.setFieldValue("id",response[0]._id)
          formik.setFieldValue("fname",response[0].fname)
          formik.setFieldValue("lname",response[0].lname)
          formik.setFieldValue("email",response[0].email)
          formik.setFieldValue("mob",response[0].mob)
          formik.setFieldValue("website",response[0].website)
          formik.setFieldValue("pass",response[0].pass)
          
        
        })
        .catch((err) => {
          alert("Server Down")
          console.error(err)

        });
}  
  // let [formik.values,setArray]=useState({
  //   fname:'',
  //   lname:'',
  //   email:'',
  //   mob:'',
  //   website:'',
  //   pass:'',
  //   cpass:'',
  // })

  // let handleForm=(e)=>{
  //   setArray({...formik.values,[e.target.id]:e.target.value})
  // }

  // const submitdata=()=>{

  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(formik.values),
  //     headers: { 'Content-Type': 'application/json' },
  //   };

  //   fetch('http://localhost:3001/registration', options)
  //     .then(response => response.json())
  //     .then((response)=>{
  //       setArray({
  //         fname:'',
  //         lname:'',
  //         email:'',
  //         mob:'',
  //         website:'',
  //         pass:'',
  //         cpass:'',
  //       })
  //     })
  //     .catch((err) => {
  //     alert("Server Down")
  //       console.error(err)
  //     });
  // }

  return (
  <div className="d-lg-flex half"> 
       <div className="bg order-1 order-md-2" id='img-bg' style={{
         backgroundImage: `url(${background})`
        }}>
          
        </div> 
    <div className="contents order-2 order-md-1">
      

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7 py-5">
            <h3>Register</h3>
            <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form onSubmit={formik.handleSubmit} >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label for="fname">First Name</label>
                    <input type="text" className={`form-control ${formik.touched.fname && formik.errors.fname ? "red-border" : ""} `} value={formik.values.fname} onChange={formik.handleChange}
                      placeholder="e.g. John" id="fname" />
                    <span className="text-red">{formik.errors.fname}</span>      
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label for="lname">Last Name</label>
                    <input type="text" className={`form-control  ${formik.touched.lname && formik.errors.lname ? "red-border" : ""} `} value={formik.values.lname} onChange={formik.handleChange} 
                    placeholder="e.g. Smith" id="lname" />
                    <span className="text-red">{formik.errors.lname}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group first">
                    <label for="email">Email Address</label>
                    <input type="email" className={ `form-control  ${formik.touched.email && formik.errors.email ? "red-border" : ""} `}
                      value={formik.values.email} onChange={formik.handleChange}
                      placeholder="e.g. john@your-domain.com" id="email" />
                    <span className="text-red">{formik.errors.email}</span>


                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group first">
                    <label for="lname">Phone Number</label>
                    <input type="text"
                      value={formik.values.mob}
                      onChange={formik.handleChange}
                      className={`form-control  ${formik.touched.mob && formik.errors.mob ? "red-border" : ""} `} placeholder="+00 0000 000 0000" id="mob" />
                    <span className="text-red">{formik.errors.mob}</span>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group first">
                    <label for="lname">Website</label>
                    <input type="text" className={ `form-control  ${formik.touched.website && formik.errors.website ? "red-border" : ""} `}
                     placeholder="e.g. https://google.com" id="website"
                      onChange={formik.handleChange}
                      value={formik.values.website} />
                    <span className="text-red">{formik.errors.website}</span>
                      
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">

                  <div className="form-group last mb-3">
                    <label for="password">Password</label>
                    <input type="password" className={`form-control ${formik.touched.pass && formik.errors.pass ? "red-border" : ""} `}
                      onChange={formik.handleChange} value={formik.values.pass}
                      placeholder="Your Password" id="pass" />
                      {/* <span>{Passwordtonggle.Icon}</span> */}
                  <span className="text-red">{formik.errors.pass}</span>
                  </div>

                </div>
                <div className="col-md-6">

                  <div className="form-group last mb-3">
                    <label for="re-password">Re-type Password</label>
                    <input type="password"  className={`form-control ${formik.touched.cpass && formik.errors.cpass ? "red-border" : ""} `}
                      onChange={formik.handleChange} value={formik.values.cpass}
                      placeholder="Your Password" id="cpass" />
                  <span className="text-red">{formik.errors.cpass}</span>


                  </div>
                </div>
              </div>

              <div className="d-flex mb-5 mt-4 align-items-center">
                <div className="d-flex align-items-center">
                  <label className="control control--checkbox mb-0"><span className="caption">Creating an account means you're okay with our <a href="#">Terms and Conditions</a> and our <a href="#">Privacy Policy</a>.</span>
                    <input type="checkbox" checked="checked" />
                    <div className="control__indicator"></div>
                  </label>
                </div>
              </div>

              <input type="submit" value="Register" className="btn px-5 btn-primary" />

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Register;




