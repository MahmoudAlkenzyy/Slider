import { Fragment } from "react";
import style from './loginPage.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {   MDBContainer, MDBInput, MDBCheckbox, MDBBtn, MDBIcon}from 'mdb-react-ui-kit';
const LogIn = () => {
    return (
      <div style={{}} className={`${style.main}`}>
        <div className={style.overlay } />
        <MDBContainer className={`p-3 my-5 d-flex flex-column   ${style.container}`}>
    
          <MDBInput wrapperClass='mb-4' label={<span className='text-light'>Email address</span>} id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label={<span className='text-light'>Password</span>} id='form2' type='password'/>
    
          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
    
          <button className="btn btn-danger">Sign in</button>

    
          <div className="text-center">
            <br></br>
            <p>Not a member? <a href="/">Register</a></p>
            
    
            <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
          </div>
    
            </MDBContainer>
        </div>
      );
}
 
export default LogIn;