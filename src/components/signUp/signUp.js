import { Fragment } from "react";
import style from './signUp.module.css'
import Form from 'react-bootstrap/Form';
import {   MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon}from 'mdb-react-ui-kit';
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";

const SignUP = () => {
    return (

        // <div style={{}} className={style.main}>
        // <div className={style.overlay } />
        // <MDBContainer className={`p-3 my-5 d-flex flex-column   ${style.container}`}>
    
        // <MDBInput wrapperClass='mb-4' placeholder='Enter your Name'  id='form2' type='name'/>
        //         <MDBInput wrapperClass='mb-4' placeholder="Enter your Email" id='form1' type='email'/>
        //         <MDBInput wrapperClass='mb-4' placeholder='Enter your Password' id='form2' type='password' />
                
    
          
    
        //   <button className="btn btn-outline-primary">Sign in</button>
    
        //   <div className="text-center">
        //     <p>Already have an account? <a href="/home/login">Login</a></p>
            
    
          
        //   </div>
    
        //     </MDBContainer>
        // </div>


        <div className="row">
            
        <div className={`${style.sec} col-6`}>
          
           
          <form className={`p-3 my-5 d-flex flex-column   ${style.coontainer} w-50 con`}>
          <h4 className={`${style.h}`}>Welcome to Move </h4>  
            <label for='form1'>Name</label>
            <input wrapperClass='mb-4' label='Email address' id='form1' type='email' className={`{} form-control`} />           
            <label for='form3'>email</label>
            <input wrapperClass='mb-4' label='First name' id='form3' type='email' className={`{} form-control`} />
            <label for='form2'>pasword</label>
            <input wrapperClass='mb-4'  id='form2' type='password'  className={`{} form-control`}/>
             <hr/>
            <button className="btn btn-dark">Sign up</button>
            <hr/>

            <p className="text-secondary">Already have an account? <a href="/home/login" className="badge badge-light text-dark">Login</a></p>
                  </form>
            </div>
        <div className={`${style.fir} col-6`}>
                
            </div>
        </div>
      );
}
 
export default SignUP;