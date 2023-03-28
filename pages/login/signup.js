import React, { useEffect, useState, createRef, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const SignUp = () => {
    var loginDetails = {}
    const [isActive, setIsActive] = useState(false);
    const [emailID, setEmailID] = useState(null);
    const [phoneno, setPhoneno] = useState(null);
    const [userName, setUserName] = useState(null);
    const [loginInput, setLoginInput] = useState(null);
    let userInput = createRef();
    let loggindUser = createRef();
    const [showSignUp, setShowSignUp] = useState(true);
    const handleClose = () => setShow(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShow = () => setShow(true);
    const handleShowSignUp = () => setShowSignUp(true);

    useEffect(() => {
        var loginDetails = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        // console.log()
        if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
            loginDetails = JSON.parse(localStorage.getItem('loginDetails'));

            setUserName(loginDetails.email)

        }

        // console.log(JSON.parse(localStorage.getItem('loginDetails')), userName)
    }, [])

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

    const SignUp = () => {
        //handleClose();
        handleShowSignUp();
    }

    const login = () => {

        var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
        if (userInput.current.value.search("@") >= 0 && userInput.current.value.search(".") >= 0) {
            loginDetail.email = userInput.current.value;
        } else {
            loginDetail.phone = (userInput.current.value.length === 10 ? (userInput.current.value) : '');
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
        <Modal size="lg" dialogClassName="lsnmodal" show={showSignUp} onHide={handleCloseSignUp} animation={true}>

            

        </Modal>
    )
}

export default SignUp;