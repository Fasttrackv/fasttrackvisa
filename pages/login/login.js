import React, { useEffect, useState, createRef } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const Login = (props) => {
  
    var loginDetails = {}
   // const [emailID, setEmailID] = useState(null);
   // const [phoneno, setPhoneno] = useState(null);
   // const [loginInput, setLoginInput] = useState(null);
    const [userName, setUserName] = useState(null);

    const [showSignUp, setShowSignUp] = useState(false);
    const handleShowSignUp = () => setShowSignUp(true);
    let loginInput = createRef();
    let signUpInputName = createRef();
    let signUpInputEmail = createRef();
    let signUpInputMobile = createRef();


    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleCloseSignUp = () => setShowSignUp(false);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
            var loginDetails = { provider_id: '', provider: '', name: '', email: '', phone: '' };
            loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
            if(loginDetails.email !== null && loginDetails.email !== '') {
               // handleClose();
            }
            setUserName(loginDetails.email)
        }
    })

    const responseFacebook = (response) => {
        // console.log(response);
        if (response !== (null && undefined && '')) {
            loginDetails = {
                provider_id: response.id, provider: response.graphDomain, name: response.name, email: response.email, phone: ''
            }
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetails).then(res => {
                //    console.log(res)
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)
                    handleClose();
                    // console.log(userName)
                }
            })
        }

    }

    const responseGoogle = (response) => {
        // console.log(response);
        if (response !== null) {
            loginDetails = {
                provider_id: response.id, provider: response.graphDomain, name: response.name, email: response.email, phone: ''
            }
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetails).then(res => {
                //      console.log(res)
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)
                    handleClose();
                }
            })
        }
    }

    const errorGoogle = (response) => {
        //   console.log(response);
        if (response !== (null && undefined && '')) {
            //show alert
        }
    }

    const login = () => {
        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        if (loginInput.current.value.search("@") >= 0 && loginInput.current.value.search(".") >= 0) {
            loginDetail.email = loginInput.current.value;
        } else {
            loginDetail.phone = (loginInput.current.value.length === 10 ? (loginInput.current.value) : '');
        }
        if (loginDetail.length !== 'undefined') {
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetail).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)

                    handleClose();
                }
            })
        } else {
            //  console.log('empty')
        }

    }

    const SingUp = () => {
        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        if (signUpInputName.current.value !=='' && signUpInputName.current.value !== null) {
            loginDetail.name = signUpInputName.current.value;
        }
        if (signUpInputEmail.current.value.search("@") >= 0 && signUpInputEmail.current.value.search(".") >= 0) {
            loginDetail.email = signUpInputEmail.current.value;
        } 
        if(signUpInputMobile.current.value.length === 10 ){
            loginDetail.phone =  signUpInputMobile.current.value;
        } 
        if (loginDetail.length !== 'undefined') {
            axios.post('https://cms.fasttrackvisa.com/api' + (props.ce_name === '' ? '' : '/' + props.ce_name) + '/user-login', loginDetail).then(res => {
                if (res.status === 200) {
                    localStorage.setItem('loginDetails', JSON.stringify(res.data.data));
                    var loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
                    setUserName(loginDetails.email)

                    handleClose();
                }
            })
        } else {
            //  console.log('empty')
        }

    }

    const logOut = () => {
        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
        setUserName(null)
    }


    return (
        <Modal size="lg" dialogClassName="lsnmodal" show={show} onHide={handleClose} animation={true}>
            {showSignUp === false ?
                <Modal.Body>
                    <span className="close2 p-3" onClick={handleClose}>
                        &times;
                    </span>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-lg-6 loginimg"><img src="/img/loginimg.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-12 col-lg-6">
                            <div className="form">
                                <h2 className="mb-1"> Log in</h2>
                                <p className='mb-5'>Welcome back! Please enter your details.</p>
                                <form>

                                    <FacebookLogin
                                        appId="1217349505522568"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="btn btn-smlogin"
                                        render={renderProps => (
                                            <button className='btn btn-smlogin facebookbtn' onClick={renderProps.onClick}> Sign In with Facebook </button>
                                        )}
                                        callback={responseFacebook} />

                                    <GoogleLogin
                                        isSignedIn={false}
                                        autoLoad={false}
                                        clientId="595370013527-8nbu0u099ha5plif8m9f4or2kfn87p0c.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <button className='btn btn-smlogin googlebtn mt-3' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                Sign In with Google</button>
                                        )}
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={errorGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />

                                    <div className='or'><span>OR</span></div>
                                    <div className="ftv-field">
                                        <label htmlFor="logininput">Email or Mobile</label>
                                        <input id="logininput" name="logininput" type="text" className="form-control" ref={loginInput} placeholder="Here" />
                                    </div>
                                    <a className="buy_btn w-100" id="form-submit-button" type="button" onClick={login}>Get OTP</a>



                                </form>
                                <p className="mt-5 text-center">If you don't have an account, please  <a onClick={handleShowSignUp}>Sign Up</a></p>


                            </div>
                        </div>
                    </div>


                </Modal.Body>
                :
                <Modal.Body>
                    <span className="close2 p-3" onClick={handleClose}>
                        &times;
                    </span>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-lg-6 loginimg"><img src="/img/loginimg.jpg" className="img-fluid" alt="" /></div>
                        <div className="col-12 col-lg-6">
                            <div className="form">
                                <h2 className="mb-3"> Sigh up</h2> 
                                <form>

                                    <FacebookLogin
                                        appId="1217349505522568"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        cssClass="btn btn-smlogin"
                                        render={renderProps => (
                                            <button className='btn btn-smlogin facebookbtn' onClick={renderProps.onClick}> Sigh up with Facebook </button>
                                        )}
                                        callback={responseFacebook} />

                                    <GoogleLogin
                                        isSignedIn={false}
                                        autoLoad={false}
                                        clientId="595370013527-8nbu0u099ha5plif8m9f4or2kfn87p0c.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <button className='btn btn-smlogin googlebtn mt-3' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                Sigh up with Google</button>
                                        )}
                                        buttonText="Login"
                                        onSuccess={responseGoogle}
                                        onFailure={errorGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />

                                    <div className='or'><span>OR</span></div>
                                    <div className="ftv-field">
                                        <label htmlFor="signNameinput">Name</label>
                                        <input id="signNameinput" name="signNameinput" type="text" className="form-control" ref={signUpInputName} placeholder="Here" />
                                    </div>

                                    <div className="ftv-field">
                                        <label htmlFor="signEmailinput">Email</label>
                                        <input id="signEmailinput" name="signEmailinput" type="email" className="form-control" ref={signUpInputEmail} placeholder="Here" />
                                    </div>
                                    <div className="ftv-field">
                                        <label htmlFor="signMobileinput">Mobile</label>
                                        <input id="signMobileinput" name="signMobileinput" type="number" className="form-control" ref={signUpInputMobile} placeholder="Here" />
                                    </div>
                                    <a className="buy_btn w-100" id="form-submit-button" type="button" onClick={SingUp}>Get OTP</a>



                                </form>
                                <p className="mt-2 text-center">If you have an account, please  <a onClick={handleCloseSignUp} >Sign In</a></p>


                            </div>
                        </div>
                    </div>


                </Modal.Body>
            }
        </Modal>
    )
}

export default Login;