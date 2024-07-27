import { useState, useEffect } from "react";
import './PaymentPage.css';

function App() {
    const initialValues = { name: "", formNo: "", email: "", regNo: "", cnic: "", appSize: "", amount: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
      // eslint-disable-next-line
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.name) {
        errors.name = "Name of Applicant is required!";
      }
      if (!values.formNo) {
        errors.formNo = "Form Number is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.regNo) {
        errors.regNo = "Registration Number is required!";
      }
      if (!values.cnic) {
        errors.cnic = "CNIC is required!";
      }
      if (!values.appSize) {
        errors.appSize = "Application Size is required!";
      }
      if (!values.amount) {
        errors.amount = "Amount is required!";
      }
      return errors;
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
        <div className='header'>
          <img src='https://blueworldcity.com/wp-content/uploads/blueworld_logos/header_logo.png' alt=''></img>
          <h1>BLUE WORLD CITY</h1>
        </div>
    
        <h2>Personal Information</h2>
        <div className="main">
        <div className="details">
            <label className="projectLabel">Project</label>
            <select id="project" name="project">
              <option value="1">Blue World City - General Block</option>
              <option value="1">Blue World Overseas</option>
              <option value="1">Awaami Complex - Isb</option>
              <option value="1">BWC - The Water Front District </option>
              <option value="1">BWC - Serene Villas</option>
            </select>

            <label>Name of Applicant</label>
            <input type="text" id="name" name="name" placeholder="Name of Applicant" value={formValues.name} onChange={handleChange}/>
            <p style={{color: 'red'}}>{formErrors.name}</p>

            <label>Form No</label>
            <input type="text" id='formNo' name='formNo' placeholder="Form No" value={formValues.formNo} onChange={handleChange}/>
            <p style={{color: 'red'}}>{formErrors.formNo}</p>

            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Email Address" value={formValues.email} onChange={handleChange}/>
            <p style={{color: 'red'}}>{formErrors.email}</p>

            <label>Registration No</label>
            <input type="text" id="regNo" name="regNo" placeholder="Enter Registration No" value={formValues.regNo} onChange={handleChange}/>
            <p style={{color: 'red'}}>{formErrors.regNo}</p>

            <label>CNIC</label>
            <input type="text" id='cnic' name='cnic' placeholder="Enter CNIC without dashes" value={formValues.cnic} minLength="13" maxLength="13" onChange={handleChange} />
            <p style={{color: 'red'}}>{formErrors.cnic}</p>
            
            <label>Application Size</label>
            <input type="text" id='appSize' name='appSize' placeholder="Enter Application Size" value={formValues.appSize} onChange={handleChange} />
            <p style={{color: 'red'}}>{formErrors.appSize}</p>

            <div className="checkboxs">
              <div className="checkbox">
                <input type="checkbox" name="installment" id="installment" value="installment"/>
                <label>Installment</label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="devCharges" id="devCharges" value="devCharges"/>
                <label>DevelopmentCharges</label>
              </div>
            </div>
            
        </div>
        </div>
        <h2>Payment Details</h2>

        <div className="main">
          <div className="payment">
            <label>Amount</label><br />
            <input type="number" id="amount" name="amount" placeholder="Amount" value={formValues.amount} onChange={handleChange} />
            <p style={{color: 'red'}}>{formErrors.amount}</p>
          </div>
        </div>

        <button>Proceed</button>
        </form>

        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success">Successful :)</div>
      ) : (
        <pre>{}</pre>
      )}
      </>  
    );
  }

export default App;
