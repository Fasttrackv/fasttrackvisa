import Link from 'next/link'
import Head from 'next/head'
import React, { useEffect, useState, createRef, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import Login from '../login/login';

const Nav = (props) => {

  var loginDetails = {}
  const [isActive, setIsActive] = useState(false);
  const [emailID, setEmailID] = useState(null);
  const [phoneno, setPhoneno] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loginInput, setLoginInput] = useState(null);
  let userInput = createRef();
  let loggindUser = createRef();

  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShow = () => setShow(true);
  const handleShowSignUp = () => setShowSignUp(true);

  useEffect(() => {
    var loginDetails = { provider_id: '', provider: '', name: '', email: '', phone: '' };
    if (JSON.parse(localStorage.getItem('loginDetails')) !== null) {
      loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
      if(loginDetails.email !== '' && loginDetails.email !== null && loginDetails.email !== undefined) {
        setUserName(loginDetails.email)
      } else if(loginDetails.phone !== '' && loginDetails.phone !== null && loginDetails.phone !== undefined) {
        setUserName(loginDetails.phone)
      }
      
    }
  })

  const login = () => {
    if (show === true) {
      setShow(false);
      setTimeout(() => {
        setShow(true);
      }, 100)
    } else {
      setShow(true);
    }
  }

  const logOut = () => {
    var loginDetail = { provider_id: '', provider: '', name: '', email: '', phone: '' };
    localStorage.setItem('loginDetails', JSON.stringify(loginDetail));
    setUserName(null)
  }

  const Showhidenav = event => {

    setIsActive(current => !current);
  };

  return (

    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" crossOrigin />
        <link rel="preconnect" href="//fonts.gstatic.com" crossOrigin />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link href="//fonts.googleapis.com/css2?family=Fira+Sans:wght@700&Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="/css/font-awesome-4.7.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/ftv_styles.css" />
        <meta name="theme-color" content="#245cc1" />



          
        {props.ce_name === '' ?
          <>

                  <title>{props.meta_title}</title>
                  <meta name="description" content={props.meta_desc} />

                  <meta name="keywords" content={props.meta_keyword} />

                  <meta property="og:title" content={props.meta_title} />
                  <meta property="og:description" content={props.meta_desc} />

                  <meta property="og:keywords" content={props.meta_keyword} />

                  <meta property="og:image" content={props.meta_img} />
                  <meta property="og:url" content={'/' + props.meta_url} />

                  <meta property="og:type" content="Article" />
                  <meta property="og:site_name" content="Holidayrewardz.com" />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:site" content="@FastTrackVisa" />
                  <meta name="twitter:creator" content="@FastTrackVisa" />

                  <meta name="twitter:image" content={props.meta_img} />
                  <meta name="twitter:title" content={props.meta_title} />
                  <meta name="twitter:description" content={props.meta_desc} />
                  <meta name="twitter:url" content={'/' + props.meta_url} />
                  <link rel="canonical" href={'/' + props.meta_url} />

                </>
           
          :
          <>

            
                  <title>{props.meta_title}</title>
                  <meta name="description" content={props.meta_desc} />

                  <meta name="keywords" content={props.meta_keyword} />

                  <meta property="og:title" content={props.meta_title} />
                  <meta property="og:description" content={props.meta_desc} />

                  <meta property="og:keywords" content={props.meta_keyword} />

                  <meta property="og:image" content={props.meta_img} />
                  <meta property="og:url" content={'/' + props.ce_name + props.meta_url} />

                  <meta property="og:type" content="Article" />
                  <meta property="og:site_name" content="Holidayrewardz.com" />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:site" content="@FastTrackVisa" />
                  <meta name="twitter:creator" content="@FastTrackVisa" />

                  <meta name="twitter:image" content={props.meta_img} />
                  <meta name="twitter:title" content={props.meta_title} />
                  <meta name="twitter:description" content={props.meta_desc} />
                  <meta name="twitter:url" content={'/' + props.ce_name + props.meta_url} />
                  <link rel="canonical" href={'/' + props.ce_name + props.meta_url} />
 
            
          </>}



      </Head>



      <div className="container dflex position-relative">
        <div className="d-flex">
          <span className="navbtn" onClick={Showhidenav}><i className='fa fa-bars'></i></span>
          {props.ce_name === '' ? <Link href={'/'}>
            <a className="navbar-brand"><LazyLoadImage src="/img/logo.png" width="209" height="56" alt="Fast Track Visa" /> </a>
          </Link> : <Link href={'/' + props.ce_name}>
            <a className="navbar-brand"><LazyLoadImage src="/img/logo.png" width="209" height="56" alt="Fast Track Visa" /> </a>
          </Link>}



        </div>
        <nav className={isActive ? 'active_nav w-100' : 'w-100'}>
          <ul className="nav navbar">
            

            <li className='cdd ml-auto'>

              {props.ce_name === "" ?
                <span><b className="gss_img flag-us"></b> USD  <i className='fa fa-angle-down'></i></span>

                : props.ce_name === "en-sg" ? <span><b className="gss_img flag-sg"></b>SGD <i className='fa fa-angle-down'></i></span>
                  : props.ce_name === "zh-tw" ? <span><b className="gss_img flag-tw"></b>TWD <i className='fa fa-angle-down'></i></span>
                    : props.ce_name === "ja-jp" ? <span><b className="gss_img flag-jp"></b>USD <i className='fa fa-angle-down'></i></span>
                      : props.ce_name === "zh-hk" ? <span><b className="gss_img flag-hk"></b>USD <i className='fa fa-angle-down'></i></span>
                        : props.ce_name === "ko-kr" ? <span><b className="gss_img flag-kr"></b>KRW <i className='fa fa-angle-down'></i></span>
                          : props.ce_name === "en-ph" ? <span><b className="gss_img flag-ph"></b>PHP <i className='fa fa-angle-down'></i></span>
                            : props.ce_name === "en-th" ? <span><b className="gss_img flag-th"></b>THB <i className='fa fa-angle-down'></i></span>
                              : props.ce_name === "en-gb" ? <span><b className="gss_img flag-gb"></b>GBP <i className='fa fa-angle-down'></i></span>
                                : props.ce_name === "en-in" ? <span><b className="gss_img flag-in"></b>INR <i className='fa fa-angle-down'></i></span>
                                  : props.ce_name === "en-sl" ? <span><b className="gss_img flag-sl"></b>LKR <i className='fa fa-angle-down'></i></span>
                                    : props.ce_name === "en-za" ? <span><b className="gss_img flag-za"></b>ZAR <i className='fa fa-angle-down'></i></span>
                                      : props.ce_name === "en-au" ? <span><b className="gss_img flag-au"></b>AUD <i className='fa fa-angle-down'></i></span>
                                        : props.ce_name === "en-ke" ? <span><b className="gss_img flag-ke"></b>KES <i className='fa fa-angle-down'></i></span>
                                          : props.ce_name === "en-kw" ? <span><b className="gss_img flag-kw"></b>KWD <i className='fa fa-angle-down'></i></span>
                                            : props.ce_name === "ms-my" ? <span><b className="gss_img flag-my"></b>MYR <i className='fa fa-angle-down'></i></span>
                                              : props.ce_name === "en-nz" ? <span><b className="gss_img flag-nz"></b>NZD <i className='fa fa-angle-down'></i></span>
                                                : props.ce_name === "en-sa" ? <span><b className="gss_img flag-sa"></b>SAR <i className='fa fa-angle-down'></i></span>
                                                  : props.ce_name === "en-tr" ? <span><b className="gss_img flag-tr"></b>TRY <i className='fa fa-angle-down'></i></span>
                                                    : props.ce_name === "uk-ua" ? <span><b className="gss_img flag-ua"></b>UAH <i className='fa fa-angle-down'></i></span>
                                                      : props.ce_name === "en-ae" ? <span><b className="gss_img flag-ae"></b>AED <i className='fa fa-angle-down'></i></span>
                                                        : props.ce_name === "en-ca" ? <span><b className="gss_img flag-ca"></b>CAD <i className='fa fa-angle-down'></i></span>
                                                          : props.ce_name === "hu-hu" ? <span><b className="gss_img flag-hu"></b>HUF <i className='fa fa-angle-down'></i></span>
                                                            : props.ce_name === "de-at" ? <span><b className="gss_img flag-at"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                              : props.ce_name === "en-rs" ? <span><b className="gss_img flag-rs"></b>RSD <i className='fa fa-angle-down'></i></span>
                                                                : props.ce_name === "de-ch" ? <span><b className="gss_img flag-ch"></b>CHF <i className='fa fa-angle-down'></i></span>
                                                                  : props.ce_name === "de-de" ? <span><b className="gss_img flag-de"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                    : props.ce_name === "en-il" ? <span><b className="gss_img flag-il"></b>ILS <i className='fa fa-angle-down'></i></span>
                                                                      : props.ce_name === "bg-bg" ? <span><b className="gss_img flag-bg"></b>BGN <i className='fa fa-angle-down'></i></span>
                                                                        : props.ce_name === "fr-fr" ? <span><b className="gss_img flag-fr"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                          : props.ce_name === "it-it" ? <span><b className="gss_img flag-it"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                            : props.ce_name === "da-dk" ? <span><b className="gss_img flag-dk"></b>DKK <i className='fa fa-angle-down'></i></span>
                                                                              : props.ce_name === "sk-sk" ? <span><b className="gss_img flag-sk"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                : props.ce_name === "no-no" ? <span><b className="gss_img flag-no"></b>NOK <i className='fa fa-angle-down'></i></span>
                                                                                  : props.ce_name === "en-ie" ? <span><b className="gss_img flag-ie"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                    : props.ce_name === "es-es" ? <span><b className="gss_img flag-es"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                      : props.ce_name === "hr-hr" ? <span><b className="gss_img flag-hr"></b>HRK <i className='fa fa-angle-down'></i></span>
                                                                                        : props.ce_name === "pl-pl" ? <span><b className="gss_img flag-pl"></b>PLN <i className='fa fa-angle-down'></i></span>
                                                                                          : props.ce_name === "lt-lt" ? <span><b className="gss_img flag-lt"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                            : props.ce_name === "ro-ro" ? <span><b className="gss_img flag-ro"></b>RON <i className='fa fa-angle-down'></i></span>
                                                                                              : props.ce_name === "lv.lv" ? <span><b className="gss_img flag-lv"></b>LVA <i className='fa fa-angle-down'></i></span>
                                                                                                : props.ce_name === "nl-nl" ? <span><b className="gss_img flag-nl"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                                  : props.ce_name === "ru-ru" ? <span><b className="gss_img flag-ru"></b>RUB <i className='fa fa-angle-down'></i></span>
                                                                                                    : props.ce_name === "nl-be" ? <span><b className="gss_img flag-be"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                                      : props.ce_name === "cs-cz" ? <span><b className="gss_img flag-cz"></b>CZK <i className='fa fa-angle-down'></i></span>
                                                                                                        : props.ce_name === "el-gr" ? <span><b className="gss_img flag-gr"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                                          : props.ce_name === "pt-pt" ? <span><b className="gss_img flag-pt"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                                            : props.ce_name === "sv-se" ? <span><b className="gss_img flag-se"></b>SEK <i className='fa fa-angle-down'></i></span>
                                                                                                              : props.ce_name === "es-mx" ? <span><b className="gss_img flag-mx"></b>MXN <i className='fa fa-angle-down'></i></span>
                                                                                                                : props.ce_name === "pt-br" ? <span><b className="gss_img flag-br"></b>BRL <i className='fa fa-angle-down'></i></span>
                                                                                                                  : props.ce_name === "fi-fi" ? <span><b className="gss_img flag-fi"></b>EUR <i className='fa fa-angle-down'></i></span>
                                                                                                                    : props.ce_name === "zh-cn" ? <span><b className="gss_img flag-cn"></b>CNY <i className='fa fa-angle-down'></i></span>
                                                                                                                      : props.ce_name === "en-id" ? <span><b className="gss_img flag-id"></b>IDR <i className='fa fa-angle-down'></i></span>
                                                                                                                        : props.ce_name === "es-ar" ? <span><b className="gss_img flag-ar"></b>ARS <i className='fa fa-angle-down'></i></span>
                                                                                                                          : props.ce_name === "es-cl" ? <span><b className="gss_img flag-cl"></b>CLP <i className='fa fa-angle-down'></i></span>
                                                                                                                            :
                                                                                                                            ''
              }


              <div className='cn_dd'>
                <a href="/" className={props.ce_name === "" ? "mactive" : ""} title="USA"><b className="gss_img flag-us"></b>USA</a>
                <a href="/en-sg" className={props.ce_name === "en-sg" ? "mactive" : ""} title="Singapore"><b className="gss_img flag-sg"></b>Singapore</a>
                <a href="/zh-tw" className={props.ce_name === "zh-tw" ? "mactive" : ""} title="Taiwan"><b className="gss_img flag-tw"></b>Taiwan</a>
                <a href="/ja-jp" className={props.ce_name === "ja-jp" ? "mactive" : ""} title="Japan"><b className="gss_img flag-jp"></b>Japan</a>
                <a href="/zh-hk" className={props.ce_name === "zh-hk" ? "mactive" : ""} title="Hong Kong"><b className="gss_img flag-hk"></b>Hong Kong</a>
                <a href="/ko-kr" className={props.ce_name === "ko-kr" ? "mactive" : ""} title="South Korea"><b className="gss_img flag-kr"></b>South Korea</a>
                <a href="/en-ph" className={props.ce_name === "en-ph" ? "mactive" : ""} title="Philippines"><b className="gss_img flag-ph"></b>Philippines</a>
                <a href="/en-th" className={props.ce_name === "en-th" ? "mactive" : ""} title="Thailand"><b className="gss_img flag-th"></b>Thailand</a>
                <a href="/en-gb" className={props.ce_name === "en-gb" ? "mactive" : ""} title="United Kingdom"><b className="gss_img flag-gb"></b>United Kingdom</a>
                <a href="/en-in" className={props.ce_name === "en-in" ? "mactive" : ""} title="India"><b className="gss_img flag-in"></b>India</a>
                <a href="/en-sl" className={props.ce_name === "en-sl" ? "mactive" : ""} title="Sri Lanka"><b className="gss_img flag-sl"></b>Sri Lanka</a>
                <a href="/en-za" className={props.ce_name === "en-za" ? "mactive" : ""} title="South Africa"><b className="gss_img flag-za"></b>South Africa</a>
                <a href="/en-au" className={props.ce_name === "en-au" ? "mactive" : ""} title="Australia"><b className="gss_img flag-au"></b>Australia</a>
                <a href="/en-ke" className={props.ce_name === "en-ke" ? "mactive" : ""} title="Kenya"><b className="gss_img flag-ke"></b>Kenya</a>
                <a href="/en-kw" className={props.ce_name === "en-kw" ? "mactive" : ""} title="Kuwait"><b className="gss_img flag-kw"></b>Kuwait</a>
                <a href="/ms-my" className={props.ce_name === "ms-my" ? "mactive" : ""} title="Malaysia"><b className="gss_img flag-my"></b>Malaysia</a>
                <a href="/en-nz" className={props.ce_name === "en-nz" ? "mactive" : ""} title="New Zealand"><b className="gss_img flag-nz"></b>New Zealand</a>
                <a href="/en-sa" className={props.ce_name === "en-sa" ? "mactive" : ""} title="Saudi Arabia"><b className="gss_img flag-sa"></b>Saudi Arabia</a>
                <a href="/en-tr" className={props.ce_name === "en-tr" ? "mactive" : ""} title="Turkey"><b className="gss_img flag-tr"></b>Turkey</a>
                <a href="/uk-ua" className={props.ce_name === "uk-ua" ? "mactive" : ""} title="Ukraine"><b className="gss_img flag-ua"></b>Ukraine</a>
                <a href="/en-ae" className={props.ce_name === "en-ae" ? "mactive" : ""} title="UAE"><b className="gss_img flag-ae"></b>UAE</a>
                <a href="/en-ca" className={props.ce_name === "en-ca" ? "mactive" : ""} title="Canada"><b className="gss_img flag-ca"></b>Canada</a>
                <a href="/hu-hu" className={props.ce_name === "hu-hu" ? "mactive" : ""} title="Hungary"><b className="gss_img flag-hu"></b>Hungary</a>
                <a href="/de-at" className={props.ce_name === "de-at" ? "mactive" : ""} title="Austria"><b className="gss_img flag-at"></b>Austria</a>
                <a href="/en-rs" className={props.ce_name === "en-rs" ? "mactive" : ""} title="Serbia"><b className="gss_img flag-rs"></b>Serbia</a>
                <a href="/de-ch" className={props.ce_name === "de-ch" ? "mactive" : ""} title="Switzerland"><b className="gss_img flag-ch"></b>Switzerland</a>
                <a href="/de-de" className={props.ce_name === "de-de" ? "mactive" : ""} title="Germany"><b className="gss_img flag-de"></b>Germany</a>
                <a href="/en-il" className={props.ce_name === "en-il" ? "mactive" : ""} title="Israel"><b className="gss_img flag-il"></b>Israel</a>
                <a href="/bg-bg" className={props.ce_name === "bg-bg" ? "mactive" : ""} title="Bulgaria"><b className="gss_img flag-bg"></b>Bulgaria</a>
                <a href="/fr-fr" className={props.ce_name === "fr-fr" ? "mactive" : ""} title="France"><b className="gss_img flag-fr"></b>France</a>
                <a href="/it-it" className={props.ce_name === "it-it" ? "mactive" : ""} title="Italy"><b className="gss_img flag-it"></b>Italy</a>
                <a href="/da-dk" className={props.ce_name === "da-dk" ? "mactive" : ""} title="Denmark"><b className="gss_img flag-dk"></b>Denmark</a>
                <a href="/sk-sk" className={props.ce_name === "sk-sk" ? "mactive" : ""} title="Slovakia"><b className="gss_img flag-sk"></b>Slovakia</a>
                <a href="/no-no" className={props.ce_name === "no-no" ? "mactive" : ""} title="Norway"><b className="gss_img flag-no"></b>Norway</a>
                <a href="/en-ie" className={props.ce_name === "en-ie" ? "mactive" : ""} title="Ireland"><b className="gss_img flag-ie"></b>Ireland</a>
                <a href="/es-es" className={props.ce_name === "es-es" ? "mactive" : ""} title="Spain"><b className="gss_img flag-es"></b>Spain</a>
                <a href="/hr-hr" className={props.ce_name === "hr-hr" ? "mactive" : ""} title="Croatia"><b className="gss_img flag-hr"></b>Croatia</a>
                <a href="/pl-pl" className={props.ce_name === "pl-pl" ? "mactive" : ""} title="Poland"><b className="gss_img flag-pl"></b>Poland</a>
                <a href="/lt-lt" className={props.ce_name === "lt-lt" ? "mactive" : ""} title="Lithuania"><b className="gss_img flag-lt"></b>Lithuania</a>
                <a href="/ro-ro" className={props.ce_name === "ro-ro" ? "mactive" : ""} title="Romania"><b className="gss_img flag-ro"></b>Romania</a>
                <a href="/lv.lv" className={props.ce_name === "lv.lv" ? "mactive" : ""} title="Latvia"><b className="gss_img flag-lv"></b>Latvia</a>
                <a href="/nl-nl" className={props.ce_name === "nl-nl" ? "mactive" : ""} title="Netherlands"><b className="gss_img flag-nl"></b>Netherlands</a>
                <a href="/ru-ru" className={props.ce_name === "ru-ru" ? "mactive" : ""} title="Russia"><b className="gss_img flag-ru"></b>Russia</a>
                <a href="/nl-be" className={props.ce_name === "nl-be" ? "mactive" : ""} title="Belgium"><b className="gss_img flag-be"></b>Belgium</a>
                <a href="/cs-cz" className={props.ce_name === "cs-cz" ? "mactive" : ""} title="Czech Republic"><b className="gss_img flag-cz"></b>Czech Republic</a>
                <a href="/el-gr" className={props.ce_name === "el-gr" ? "mactive" : ""} title="Greece"><b className="gss_img flag-gr"></b>Greece</a>
                <a href="/pt-pt" className={props.ce_name === "pt-pt" ? "mactive" : ""} title="Portugal"><b className="gss_img flag-pt"></b>Portugal</a>
                <a href="/sv-se" className={props.ce_name === "sv-se" ? "mactive" : ""} title="Sweden"><b className="gss_img flag-se"></b>Sweden</a>
                <a href="/es-mx" className={props.ce_name === "es-mx" ? "mactive" : ""} title="Mexico"><b className="gss_img flag-mx"></b>Mexico</a>
                <a href="/pt-br" className={props.ce_name === "pt-br" ? "mactive" : ""} title="Brazil"><b className="gss_img flag-br"></b>Brazil</a>
                <a href="/fi-fi" className={props.ce_name === "fi-fi" ? "mactive" : ""} title="Finland"><b className="gss_img flag-fi"></b>Finland</a>
                <a href="/zh-cn" className={props.ce_name === "zh-cn" ? "mactive" : ""} title="China"><b className="gss_img flag-cn"></b>China</a>
                <a href="/en-id" className={props.ce_name === "en-id" ? "mactive" : ""} title="Indonesia"><b className="gss_img flag-id"></b>Indonesia</a>
                <a href="/es-ar" className={props.ce_name === "es-ar" ? "mactive" : ""} title="Argentina"><b className="gss_img flag-ar"></b>Argentina</a>
                <a href="/es-cl" className={props.ce_name === "es-cl" ? "mactive" : ""} title="Chile"><b className="gss_img flag-cl"></b>Chile</a>
              </div>

            </li>

            <li className='cdd'>

              <span>ENG  <i className='fa fa-angle-down'></i></span>
              <div className='cn_dd la_ndd'>
                <a href='/en-in' title="English">ENG</a>

              </div>
            </li>
          </ul>
        </nav>
        <ul className="myac_nav">
          <li>
            {userName !== null && userName !== undefined && userName !== '' ? <a onClick={logOut} >Log Out</a> : <a onClick={login}>Sign In</a>}

          </li>

          <li>


          </li>
        </ul>
      </div>

      { show === true ? <Login ce_name={props.ce_name} /> : ''}

      <style jsx global>
        {`*{margin:0;padding:0;list-style:none} 
ul:not(.browser-default)>li{list-style-type:none}
a{color:#007bff;-webkit-transition:all .4s ease-in-out;-o-transition:all .4s ease-in-out;transition:all .4s ease-in-out;outline:0}
a:hover{color:#00035c;outline:none!important;text-decoration:none!important}
a:focus{outline:none!important;text-decoration:none!important}
 
section{padding:0;margin:0}
aside{padding:50px 0}
.no-bdr{border:none!important}
.no-bg{background:none!important}
::-moz-selection{text-shadow:none;color:#fff;background:#03356b}
::selection{text-shadow:none;color:#fff;background:#03356b}
img::-moz-selection{color:#fff;background:0}
img::selection{color:#fff;background:0}
img::-moz-selection{color:#fff;background:0}
header{padding:10px 0;background:linear-gradient(180deg, #000000, 50%, transparent);position:relative;z-index:991;}

@media(min-width:991.2px){
  @-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}
  100%{opacity:1;-webkit-transform:none;transform:none}
  }@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);-ms-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}
  100%{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none}
  }.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}
 

.hsticky{position:fixed;top:0;left:0;width:100%;z-index:991;background:#010032;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-name:fadeInDown;animation-name:fadeInDown;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-box-shadow:0 -3px 8px rgba(0,0,0,0.75);box-shadow:0 -3px 8px rgba(0,0,0,0.75)}

.hsticky2{width:100%;z-index:991;background:#010032; -webkit-box-shadow:0 -3px 8px rgba(0,0,0,0.75);box-shadow:0 -3px 8px rgba(0,0,0,0.75)}

}

@media(max-width:991px){
  .hsticky,header.App-header{position:fixed;top:0;left:0;width:100%;z-index:991;background:#010032;}
}


.dflex{display:flex;align-items:center;justify-content:space-between}
.dflex ul{margin:0;padding:0;align-items:center}
nav{margin:00px 0;padding:0}
nav .nav.navbar{margin:0;padding:0;position:inherit}
nav .nav.navbar li{list-style:none;transition:all .35s ease-in-out}
nav .nav.navbar li a {color:#fff; font-size:14px; padding:8px 15px; font-weight:600}
nav .nav.navbar li a:hover {color:#c0902c}
 .myac_nav a {padding:12px 25px; cursor: pointer; white-space: nowrap;    min-height: 50px; background-color:#c0902c; color:#fff; border-radius:4px; font-weight:600}
.bannervideo {position:absolute;top:-200px;left:0;width:100%;height:100%;}
.lsnmodal .modal-body{padding:0}
.lsnmodal .close2 {    position: absolute;
  cursor: pointer;
  right: 0;
  top: -10px;
  font-size: 20px;
  font-weight: bold;    z-index: 2;}
.form {padding:20px 40px}
.btn-smlogin,.kep-login-facebook {  display:block;   padding: 7px 5px;
  border: 1px solid #ddd;
  border-radius: 4px; background:#fff;    width: 100%;
  box-shadow: 1px 1px 4px #ddd;}
  .btn-smlogin img {    width: 27px;}
  .or {
    position: relative;
    background: #ddd;
    height: 1px;
    width: 100%;
    margin: 30px 0;
    text-align: center;
}
.or span {position: absolute;
  top: -10px;margin-left: -20px;
  background: #fff;
  padding: 0 5px;}
  .lsnmodal p a {    color: #c0902c !important;
    cursor: pointer;}
  .lsnmodal .modal-content {    border-radius: 0;}
.cdd {
    position: relative;
}
.cdd span {margin-right: 15px; background: rgb(255 255 255 / 11%);
  padding: 11px 15px;    min-height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;}
  .cdd span b {    margin-right: 10px;}
  .cdd span i{    margin-left: 10px;}
  .cn_dd {
    display:none;
    position: absolute;
    width: 200px;
    background: #fff;
    color: #333;
    padding: 0;
    max-height: 300px;
    overflow: auto; box-shadow:rgb(0 0 0 / 7%) 0px 0.7px 1.4px, rgb(0 0 0 / 5%) 0px 1.9px 4px, rgb(0 0 0 / 5%) 0px 4.5px 10px
}.la_ndd {width:90px}

.cdd:hover .cn_dd {display:block}
.cn_dd a {    color: #333 !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;}
  .cn_dd a:hover {background:#f5f5f5}
  .gss_img {margin:0px 6px 0 0; display: inline-block; background: url('/img/countries_sp.png') no-repeat; overflow: hidden; text-indent: -9999px; text-align: left; min-width: 32px; height: 28px;}
  .gss_img.flag-us { background-position: -224px -448px; }
  .gss_img.flag-ca { background-position: -128px -96px; }
  .gss_img.flag-au { background-position:  -480px -32px; }
  .gss_img.flag-uk { background-position: -320px -160px }
  .gss_img.flag-za { background-position: -128px -481px; }
  .gss_img.flag-ie { background-position: -512px -192px; }
  .gss_img.flag-ae { background-position:-96px -32px; }
  .gss_img.flag-sl { background-position: -416px -384px; }
  .gss_img.flag-sg { background-position: -288px -384px; }
  .gss_img.flag-my { background-position: -96px -320px; }
  .gss_img.flag-id { background-position: -480px -192px; }
  .gss_img.flag-th { background-position: -320px -416px; }
  .gss_img.flag-hk { background-position: -288px -192px; }
  .gss_img.flag-sa { background-position: -128px -384px; }
  .gss_img.flag-bh { background-position: -256px -64px; }
  .gss_img.flag-om { background-position: -0px -352px; }
  .gss_img.flag-qa { background-position: -512px -352px;; }
  .gss_img.flag-kw { background-position: -64px -256px; }
  .gss_img.flag-ph { background-position: -160px -352px; }
  .gss_img.flag-nz { background-position: -512px -320px; }
  .gss_img.flag-fr { background-position:-256px -160px; }
  .gss_img.flag-de { background-position: -192px -128px; }
  .gss_img.flag-it { background-position: -192px -224px; }
  .gss_img.flag-es { background-position: -0px -160px; }
  .gss_img.flag-jp { background-position: -320px -224px;; }
  .gss_img.flag-cn { background-position: -448px -96px; }
  .gss_img.flag-tr { background-position: -0px -448px; }
  .gss_img.flag-mx { background-position:  -64px -320px; }
  .gss_img.flag-ru { background-position: -64px -384px; }
  .gss_img.flag-se { background-position: -256px -384px; }
  .gss_img.flag-no { background-position: -384px -320px; }
  .gss_img.flag-fi { background-position: -96px -160px;; }
  .gss_img.flag-kr { background-position: -32px -256px; }
  .gss_img.flag-il { background-position: -0px -224px; }
  .gss_img.flag-nl { background-position: -352px -320px; }
  .gss_img.flag-be { background-position: -160px -64px; }
  .gss_img.flag-at { background-position: -448px -32px; }
  .gss_img.flag-pt { background-position: -416px -352px; }
  .gss_img.flag-dk { background-position: -256px -128px; }
  .gss_img.flag-br { background-position: -480px -64px; }
  .gss_img.flag-ng { background-position: -288px -320px; }
  .gss_img.flag-in { background-position: -64px -224px; }
  
  .gss_img.flag-ke { background-position:  -352px -224px; }
  .gss_img.flag-bd { background-position: -128px -64px; }
  .gss_img.flag-eg { background-position: -448px -128px; }
  .gss_img.flag-ar { background-position: -384px -32px; }
  .gss_img.flag-cl { background-position: -384px -96px; }
  .gss_img.flag-co { background-position: -480px -96px; }
  .gss_img.flag-pl { background-position: -288px -352px; }
  .gss_img.flag-ro { background-position: -0px -384px; }
  .gss_img.flag-ua { background-position: -160px -448px; }
  .gss_img.flag-hu { background-position: -416px -192px; }
  .gss_img.flag-kz { background-position: -128px -256px; }
  .gss_img.flag-uz { background-position: -288px -448px; }
  .gss_img.flag-az { background-position: -32px -64px; }
  .gss_img.flag-tj { background-position: -352px -416px; }



@media(max-width:767px){
   
header .dflex{-ms-flex-wrap:wrap;flex-wrap:wrap}  
}

      `}
      </style>
    </>
  )
}
export default Nav
